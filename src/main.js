import { createApp } from 'vue';
import {
  Layout,
  Table,
  Form,
  Input,
  Button,
  Row,
  Col,
  PageHeader,
  Tooltip,
  Space
} from 'ant-design-vue';
import App from './App.vue';

createApp(App)
  .use(Layout)
  .use(Table)
  .use(Form)
  .use(Input)
  .use(Button)
  .use(Row)
  .use(Col)
  .use(PageHeader)
  .use(Tooltip)
  .use(Space)
  .mount('#app');
