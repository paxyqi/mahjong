interface IHandCard{
  p:string[],
  m:string[],
  s:string[],
  z:string[]
}
type Card = { i:number, j:number};
export type Color = keyof IHandCard;
type Kairyou = { mo:string[], rest:number };
type ResultStructure = {syanten:number, kairyou:Map<string, Kairyou>};
export function splitTiles (handCard:string):IHandCard {
  const result:IHandCard = {
    p: [],
    m: [],
    s: [],
    z: []
  };
  let rest = handCard;
  while (rest.length > 0) {
    const colored = rest.match(/[0-9]*[spzm]/);
    if (colored === null) {
      throw Error('invaild input');
    } else {
      const matchStr = colored[0];
      result[(matchStr[matchStr.length - 1]) as Color] = result[(matchStr[matchStr.length - 1]) as Color].concat(matchStr
        .substr(0, matchStr.length - 1)
        .split(''));
      rest =
      rest.substr(0, colored.index) +
      rest.substr(colored.index as number + matchStr.length);
    }
  }
  return result;
}

export function joinTiles (tiles:IHandCard):string {
  let handCard = '';
  for (const color in tiles) {
    if (tiles[color as Color].length === 0) { continue; }
    handCard += tiles[color as Color].sort().join('') + color;
  }
  return handCard;
}

const tilesImage = {
  m: ['🀇', '🀈', '🀉', '🀊', '🀋', '🀌', '🀍', '🀎', '🀏'],
  p: ['🀙', '🀚', '🀛', '🀜', '🀝', '🀞', '🀟', '🀠', '🀡'],
  s: ['🀐', '🀑', '🀒', '🀓', '🀔', '🀕', '🀖', '🀗', '🀘'],
  z: ['🀀', '🀁', '🀂', '🀃', '🀆', '🀅', '🀄', '🀫', '🀪']
};

function transTiles2Arr (CardString:IHandCard):number[][] {
  // 将m=['0','5']转变为[1,0,0,0,0,1,0,0,0]
  const arrM = new Array(9).fill(0);
  const arrP = new Array(9).fill(0);
  const arrS = new Array(9).fill(0);
  const arrZ = new Array(7).fill(0);
  let temp;
  for (let i = 0; i < CardString.m.length; i++) {
    temp = parseInt(CardString.m[i]);
    arrM[--temp]++;
  }
  for (let i = 0; i < CardString.p.length; i++) {
    temp = parseInt(CardString.p[i]);
    arrP[--temp]++;
  }
  for (let i = 0; i < CardString.s.length; i++) {
    temp = parseInt(CardString.s[i]);
    arrS[--temp]++;
  }
  for (let i = 0; i < CardString.z.length; i++) {
    temp = parseInt(CardString.z[i]);
    arrZ[--temp]++;
  }
  const arr = [[...arrM], [...arrP], [...arrS], [...arrZ]];
  return arr;
}

function syanten (t:number[][]) { // 24m1556p2459s4572z syanten = 8-2*mentsu-tatsu
  let res = 9;
  let mentsu = 0;
  let tatsu = 0;
  let alone = 0;
  const furo = 0; // 面子，搭子,单张，副露
  let quetou1 = false; // 第一种计算情况下是否已经有雀头，如11s
  let quetou2 = false; // 第二种计算情况下是否有雀头
  let quetou = false;
  const search = (arr:number[], isJihai = false) => {
    let tmp1 = [0, 0, 0];
    let tmp2 = [0, 0, 0];

    // 先算面子，再算顺子
    const arr1 = [...arr];
    let tmpMentsu = 0;
    let tmpTatsu = 0;
    let tmpAlone = 0;
    for (let i = 0; i < 9; i++) {
      if (arr1[i] === 0 || arr1[i] === undefined) {
        continue;
      }
      if (arr1[i] >= 3) {
        // 三个一万
        arr1[i] -= 3;
        tmpMentsu++;
      }
      if (arr1[i] > 0) {
        // 考虑有1个顺子，或两个顺子
        if (isJihai) continue; // 字牌没有顺子
        if (arr1[i + 1] > 0 && arr1[i + 2] > 0) {
          // 顺子
          arr1[i]--;
          arr1[i + 1]--;
          arr1[i + 2]--;
          tmpMentsu++;
        }
        if (arr1[i] > 0 && arr1[i + 1] > 0 && arr1[i + 2] > 0) {
          arr1[i]--;
          arr1[i + 1]--;
          arr1[i + 2]--;
          tmpMentsu++;
        }
      }
    }
    for (let i = 0; i < 9; i++) {
      if (arr1[i] === 0 || arr1[i] === undefined) {
        continue;
      } else if (arr1[i] === 2) {
        arr1[i] -= 2;
        tmpTatsu++; // 两个一万 搭子
        quetou1 = true;
        continue;
      } else {
        if (isJihai) continue;
        if (arr1[i + 1] > 0) {
          // 12
          arr1[i]--;
          arr1[i + 1]--;
          tmpTatsu++;
        }
        if (arr1[i + 2] > 0) {
          // 13
          arr1[i]--;
          arr1[i + 2]--;
          tmpTatsu++;
        }
      }
    }
    tmpAlone += arr1.reduce((a, b) => a + b); // 剩余的为单张
    tmp1 = [tmpMentsu, tmpTatsu, tmpAlone];

    // 先算顺子，再算面子
    const arr2 = [...arr];
    tmpMentsu = 0;
    tmpTatsu = 0;
    tmpAlone = 0;
    for (let i = 0; i < 9; i++) {
      if (arr2[i] === 0 || arr2[i] === undefined) {
        continue;
      }
      if (!isJihai) {
        // 非字牌有顺子，考虑有2个顺子或者4个顺子
        if (arr2[i] >= 2 && arr2[i + 1] >= 2 && arr2[i + 2] >= 2) {
          arr2[i] -= 2;
          arr2[i + 1] -= 2;
          arr2[i + 2] -= 2;
          tmpMentsu += 2;
        }
        if (arr2[i] >= 2 && arr2[i + 1] >= 2 && arr2[i + 2] >= 2) {
          arr2[i] -= 2;
          arr2[i + 1] -= 2;
          arr2[i + 2] -= 2;
          tmpMentsu += 2;
        }
      }
      if (arr2[i] === 3 || arr2[i] === 4) {
        arr2[i] -= 3;
        tmpMentsu++;
      }
      if (arr2[i] === 2) {
        arr2[i] -= 2;
        tmpTatsu++;
        quetou2 = true;
      }
      if (isJihai) {
        continue;
      }
      if (arr2[i] > 0 && arr2[i + 1] > 0 && arr2[i + 2] > 0) {
        // 3个顺子或1个顺子
        arr2[i]--;
        arr2[i + 1]--;
        arr2[i + 2]--;
        tmpMentsu++;
      }
      if (arr2[i] > 0 && arr2[i + 1] > 0) {
        arr2[i]--;
        arr2[i + 1]--;
        tmpTatsu++;
      }
      if (arr2[i] > 0 && arr2[i + 2] > 0) {
        arr2[i]--;
        arr2[i + 2]--;
        tmpTatsu++;
      }
    }
    tmpAlone += arr2.reduce((a, b) => a + b);
    tmp2 = [tmpMentsu, tmpTatsu, tmpAlone];

    const tmp = tmp1 >= tmp2 ? tmp1 : tmp2;
    if (quetou === false) {
      quetou = tmp1 >= tmp2 ? quetou1 : quetou2; // 根据最后选择的方案确定是否有雀头
    }

    mentsu += tmp[0];
    tatsu += tmp[1];
    alone += tmp[2];
    if (mentsu + tatsu > 4) { // 搭子溢出
      if (quetou) {
        // 不拆,胡了
      } else {
        tatsu--;
        alone += 2;
      }
    }
  };// search
  const calc = () => { // bug:6m67p22456888s666z syanten should be 0, but now is 1
    let tmpRes = -1;
    while (mentsu < 4 - furo) {
      // 此处副露为已经成面子的面子数
      if (tatsu && alone) {
        // 有搭子有单牌，则打掉单牌进章，搭子数和单牌--，面子++，逆向听++
        tatsu--;
        alone--;
        mentsu++;
        tmpRes++;
        continue;
      }
      if (tatsu && !alone) {
        // 12 56==> 1 456 此时变为单牌++，搭子--，面子++
        tatsu--;
        alone++;
        mentsu++;
        tmpRes++;
        continue;
      }
      if (!tatsu && alone) {
        alone -= 2;
        mentsu++;
        tmpRes += 2;
      }
    }
    if (alone > 0) tmpRes++; // 当剩下的两张为单张的时候，此时不构成雀头。未胡牌
    res = tmpRes < res ? tmpRes : res;
    mentsu = tatsu = alone = 0;
  };

  search(t[0]);
  search(t[1]);
  search(t[2]);
  search(t[3], true);
  calc();

  return res;
}
function syanten7 (haiArr:number[][]) { // 七对子
  const cnt = haiArr[0].reduce((a, b) => a + b) + haiArr[1].reduce((a, b) => a + b) + haiArr[2].reduce((a, b) => a + b) + haiArr[3].reduce((a, b) => a + b);
  if (cnt < 13 || cnt > 14) { return -2; } // 相公
  const arr = [...haiArr[0], ...haiArr[1], ...haiArr[2], ...haiArr[3]];
  let s = 0; let t = 0;
  for (let i = 0; i < 34; i++) {
    if (arr[i] >= 2) s++;
    if (arr[i] === 1) t++;
  }
  if (s + t >= 7) { return 6 - s; } else { return 6 - s + (7 - s - t); }
}
function syanten13 (haiArr:number[][]) { // 国士无双
  const cnt = haiArr[0].reduce((a, b) => a + b) + haiArr[1].reduce((a, b) => a + b) + haiArr[2].reduce((a, b) => a + b) + haiArr[3].reduce((a, b) => a + b);
  if (cnt < 13 || cnt > 14) { return -2; }
  const arr = [haiArr[0][0], haiArr[0][8], haiArr[1][0], haiArr[1][8], haiArr[2][0], haiArr[2][8], ...haiArr[3]];
  let s = 0; let t = 0;
  for (let i = 0; i < 13; i++) {
    if (arr[i]) s++;
    if (arr[i] > 1) t = 1;
  }
  return 13 - s - t;
}

function syantenAll (haiArr:number[][]) {
  const s7 = syanten7(haiArr);
  const s13 = syanten13(haiArr);
  if (s7 === -2 || s13 === -2) { return syanten(haiArr); } else { return Math.min(syanten(haiArr), s7, s13); }
}

// 从14张牌中任选一张，再摸如一张能够改良向听的牌。当前牌面为arr，因此只需对arr进行操作后，再次将新arr进行计算，若改良成功则保留 获得{i:,j:},每一张待切牌对应一个数组
function improve (arr:number[][]) {
  const ret = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > 0) {
        ret.push(exchange(arr, i, j));
      }
    }
  }
  return ret;
}
// 打掉arr[i][j]的牌，用其他牌替换---共有33种替换的可能？剪枝？挨个试吧？
function exchange (arr:number[][], i:number, j:number):Card[] {
  const preSyanten = syantenAll(arr);
  arr[i][j]--;
  const res = [];
  for (let p = 0; p < 4; p++) {
    for (let q = 0; q < arr[p].length; q++) {
      arr[p][q]++;
      const currSyanten = syantenAll(arr);
      if ((p !== i || q !== j) && (currSyanten < preSyanten)) { // 不能是原来那个
        const couple = { i: p, j: q }; // 有改良即可
        res.push(couple);
      }
      arr[p][q]--;
    }
  }
  arr[i][j]++;
  return res;
}

function findCard (arr:number[][]):Card[] { // 将mpsz的二维数组转换成{i:,j:}
  const oneDimensionArr:Card[] = [];
  for (let n = 0; n < 4; n++) {
    for (let m = 0; m < arr[n].length; m++) {
      if (arr[n][m] > 0) {
        const currCard = { i: n, j: m }; // 可能一种牌有多张。此处算一次，即14张牌可能只有10种scheme
        oneDimensionArr.push(currCard);
      }
    }
  }
  return oneDimensionArr;
}

export function Calc (rawData:string): ResultStructure { // 输入为input框获得的原始数据，
  const arr = transTiles2Arr(splitTiles(rawData)); // 获取数据转换得到的arr
  const syantenRes = syantenAll(arr); // 计算当前手牌向听数
  const improveRes = improve(arr); // 获取改良[{i:,j:}]
  const cards = findCard(arr);
  const getCard = transArr2Card(arr);
  const mapKariyouRes = mapKariyou(cards, improveRes, getCard);
  return { syanten: syantenRes, kairyou: mapKariyouRes };
}

// function calcRestCards (arr:string[]) { // ['3m', '1p', '2p', '3p', '4p', '7p', '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '2z', '4z', '5z', '7z']
//   // 每一张牌正常应有4张剩余，应当减去当前手牌中的这张牌 考虑：无论当前手牌如何，直接减去13是否合理？
//   const rest = arr.length * 4 - 13;
//   return rest;
// }
function transArr2Card (arr:number[][]) { // 将二维数组转换为 1m，2m，...的字符串数组，用于比较
  const Cards:string[] = [];
  const color = ['m', 'p', 's', 'z'];
  arr.map((rowCards, i) =>
    rowCards.forEach((num, j) => {
      let temp = num;
      while (temp > 0) {
        Cards.push((j + 1) + color[i]);
        temp--;
      }
    })
  );
  // arr[0].forEach((num, index) => {
  //   while (num > 0) {
  //     const card = (index + 1) + 'm';
  //     Cards.push(card);
  //     num--;
  //   }
  // });
  // arr[1].forEach((num, index) => {
  //   while (num > 0) {
  //     const card = (index + 1) + 'p';
  //     Cards.push(card);
  //     num--;
  //   }
  // });
  // arr[2].forEach((num, index) => {
  //   while (num > 0) {
  //     const card = (index + 1) + 's';
  //     Cards.push(card);
  //     num--;
  //   }
  // });
  // arr[3].forEach((num, index) => {
  //   while (num > 0) {
  //     const card = (index + 1) + 'z';
  //     Cards.push(card);
  //     num--;
  //   }
  // });
  return Cards;
}
function getArrEqual (arr1:string[], arr2:string[]) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) newArr.push(arr1[i]);
    }
  }
  return newArr.length;
}
function calcRestCards (arr:string[], cards:string[]) { // ['3m', '1p', '2p', '3p', '4p', '7p', '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '2z', '4z', '5z', '7z']
  // 每一张牌正常应有4张剩余，应当减去当前手牌中的这张牌 考虑：无论当前手牌如何，直接减去13是否合理？
  const rest = arr.length * 4 - getArrEqual(arr, cards);
  return rest;
}
function transIJ2Name (Cards:Card[]) { // 将形如[{i:1,j:2},{i:2,j:2}]的数组转化为3p 3s
  const res:string[] = [];// 返回一维数组如 3p，3s，1z
  const color = ['m', 'p', 's', 'z'];
  Cards.map(card => res.push((card.j + 1) + color[card.i]));
  return res;
}
function mapKariyou (cards:Card[], improveRes:Card[][], arr:string[]) {
  const res:Map<string, Kairyou> = new Map();
  const cardsName = transIJ2Name(cards);
  for (let n = 0; n < improveRes.length; n++) {
    if (improveRes[n].length > 0) { // n号有改良
      const transName = transIJ2Name(improveRes[n]);
      res.set(cardsName[n], { mo: transName, rest: calcRestCards(transName, arr) });
    }
  }
  return res;
}

export function hai2Img (hai:string):string[] {
  try {
    const splited = splitTiles(hai.replace(/0/, '5'));
    const result = [];
    for (const key in splited) {
      result.push(...(splited[key as Color].map(index => tilesImage[key as Color][parseInt(index) - 1])));
    }
    return result;
  } catch (_) {
    return [];
  }
}

export function checkInput (tehai:string):boolean {
  try {
    const splited = splitTiles(tehai.replace(/0/, '5'));
    const sum = splited.m.length + splited.p.length + splited.s.length + splited.z.length;
    if (sum < 13 || sum > 14) { return false; }
    return true;
  } catch (_) {
    return false;
  }
}
