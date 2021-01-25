export function splitTiles (handCard) {
  const result = {
    p: [],
    m: [],
    s: [],
    z: []
  };
  let rest = handCard;
  while (rest.length > 0) {
    const colored = rest.match(/[0-9]*[spzm]/);
    const matchStr = colored[0];
    result[matchStr[matchStr.length - 1]] = result[matchStr[matchStr.length - 1]].concat(matchStr
      .substr(0, matchStr.length - 1)
      .split(''));
    rest =
        rest.substr(0, colored.index) +
        rest.substr(colored.index + matchStr.length);
  }
  return result;
}

export const tilesImage = {
  m: ['🀇', '🀈', '🀉', '🀊', '🀋', '🀌', '🀍', '🀎', '🀏'],
  p: ['🀙', '🀚', '🀛', '🀜', '🀝', '🀞', '🀟', '🀠', '🀡'],
  s: ['🀐', '🀑', '🀒', '🀓', '🀔', '🀕', '🀖', '🀗', '🀘'],
  z: ['🀀', '🀁', '🀂', '🀃', '🀆', '🀅', '🀄', '🀫', '🀪']
};

export function showHandCards (tehai) {
  let handCardsImg = '';
  handCardsImg += tehai.m
    .map((num) => (num === '0' ? '5' : num))
    .sort()
    .reduce((a, b) => a + tilesImage.m[b - 1], '');
  handCardsImg += tehai.p
    .map((num) => (num === '0' ? '5' : num))
    .sort()
    .reduce((a, b) => a + tilesImage.p[b - 1], '');
  handCardsImg += tehai.s
    .map((num) => (num === '0' ? '5' : num))
    .sort()
    .reduce((a, b) => a + tilesImage.s[b - 1], '');
  handCardsImg += tehai.z
    .map((num) => (num === '0' ? '5' : num))
    .sort()
    .reduce((a, b) => a + tilesImage.z[b - 1], '');
  return handCardsImg;
}

export function transTiles2Arr (CardString) {
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

export function syanten (t) {
  // 24m1556p2459s4572z syanten = 8-2*mentsu-tatsu
  let res = 9;
  let mentsu = 0;
  let tatsu = 0;
  let alone = 0;
  const furo = 0; // 面子，搭子,单张，副露
  const search = (arr, isJihai = false) => {
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
    mentsu += tmp[0];
    tatsu += tmp[1];
    alone += tmp[2];
  };
  const calc = () => {
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
    if (alone > 0) tmpRes++;
    res = tmpRes < res ? tmpRes : res;
    mentsu = tatsu = alone = 0;
  };

  search(t[0]);
  search(t[1]);
  search(t[2]);
  search(t[3], true);
  calc();

  return res;
};
export function syanten7 (haiArr) { // 七对子
  const cnt = haiArr[0].reduce((a, b) => a + b) + haiArr[1].reduce((a, b) => a + b) + haiArr[2].reduce((a, b) => a + b) + haiArr[3].reduce((a, b) => a + b);
  if (cnt < 13 || cnt > 14) { return -2; } // 相公
  const arr = [...haiArr[0], ...haiArr[1], ...haiArr[2], ...haiArr[3]];
  let s = 0; let t = 0;
  for (let i = 0; i < 34; i++) {
    if (arr[i] >= 2) s++;
    if (arr[i] === 1) t++;
  }
  if (s + t >= 7) { return 6 - s; } else { return 6 - s + (7 - s - t); }
};
export function syanten13 (haiArr) { // 国士无双
  const cnt = haiArr[0].reduce((a, b) => a + b) + haiArr[1].reduce((a, b) => a + b) + haiArr[2].reduce((a, b) => a + b) + haiArr[3].reduce((a, b) => a + b);
  if (cnt < 13 || cnt > 14) { return -2; }
  const arr = [haiArr[0][0], haiArr[0][8], haiArr[1][0], haiArr[1][8], haiArr[2][0], haiArr[2][8], ...haiArr[3]];
  let s = 0; let t = 0;
  for (let i = 0; i < 13; i++) {
    if (arr[i]) s++;
    if (arr[i] > 1) t = 1;
  }
  return 13 - s - t;
};

export function syantenAll (haiArr) {
  const s7 = syanten7(haiArr);
  const s13 = syanten13(haiArr);
  if (s7 === -2 || s13 === -2) { return syanten(haiArr); } else { return Math.min(syanten(haiArr), s7, s13); }
}

// 从14张牌中任选一张，再摸如一张能够改良向听的牌。当前牌面为arr，因此只需对arr进行操作后，再次将新arr进行计算，若改良成功则保留
export function improve (arr) {
  const ret = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > 0) {
        ret.push(exchange(arr, i, j));
      }
    }
  }
  return ret;
};
// 打掉arr[i][j]的牌，用其他牌替换---共有33种替换的可能？剪枝？挨个试吧？
function exchange (arr, i, j) {
  const preSyanten = syantenAll(arr);
  arr[i][j]--;
  const res = [];
  for (let p = 0; p < 4; p++) {
    for (let q = 0; q < arr[p].length; q++) {
      arr[p][q]++;
      const currSyanten = syantenAll(arr);
      if ((p !== i && q !== j) && (currSyanten < preSyanten)) { // 不能是原来那个
        const couple = { i: p, j: q }; // 有改良即可
        res.push(couple);
      }
      arr[p][q]--;
    }
  }
  arr[i][j]++;
  return res;
};

export function discard (oneDimensionArr) {
  const oneDimensionArrImg = [];
  for (let n = 0; n < oneDimensionArr.length; n++) {
    if (oneDimensionArr[n].i === 0) {
      const img = tilesImage.m[oneDimensionArr[n].j];
      oneDimensionArrImg.push(img);
    }
    if (oneDimensionArr[n].i === 1) {
      const img = tilesImage.p[oneDimensionArr[n].j];
      oneDimensionArrImg.push(img);
    }
    if (oneDimensionArr[n].i === 2) {
      const img = tilesImage.s[oneDimensionArr[n].j];
      oneDimensionArrImg.push(img);
    }
    if (oneDimensionArr[n].i === 3) {
      const img = tilesImage.z[oneDimensionArr[n].j];
      oneDimensionArrImg.push(img);
    }
  }
  return oneDimensionArrImg;
}

export function findCard (arr) {
  // 将mpsz的二维数组转换成{i:,j:}
  const oneDimensionArr = [];
  for (let n = 0; n < 4; n++) {
    for (let m = 0; m < arr[n].length; m++) {
      if (arr[n][m] > 0) {
        const currCard = { i: n, j: m }; // 可能一种牌有多张。此处算一次，即14张牌可能只有10种scheme
        oneDimensionArr.push(currCard);
      }
    }
  }
  return oneDimensionArr;
};
export function Scheme (scheme, oneDimensionArrImg) { // 摸切的牌
  const newSchemeImg = [];
  for (let n = 0; n < scheme.length; n++) {
    if (scheme[n].length !== 0) {
      const curr = {
        i: oneDimensionArrImg[n],
        j: showHandCards(newSchemeShow(scheme[n]))
      };
      newSchemeImg.push(curr);
    }
  }
  return newSchemeImg;
};
function newSchemeShow (scheme) {
  // i，j是当前arr将要被替换的元素， scheme是对应打掉i，j牌后的可能进章
  const ret = {
    p: [],
    m: [],
    s: [],
    z: []
  };
  for (let n = 0; n < scheme.length; n++) {
    if (scheme[n].i === 0) ret.m.push(String(++scheme[n].j));
    if (scheme[n].i === 1) ret.p.push(String(++scheme[n].j));
    if (scheme[n].i === 2) ret.s.push(String(++scheme[n].j));
    if (scheme[n].i === 3) ret.z.push(String(++scheme[n].j));
  }
  return ret;
}
