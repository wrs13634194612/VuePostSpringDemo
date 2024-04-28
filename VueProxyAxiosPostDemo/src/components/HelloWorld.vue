<template>
  <span><a @click="register()">去注册</a></span><br>
  <span><a @click="postData()">去登录</a></span><br>
  <span><a @click="connectTcp()">开始长连接</a></span>

</template>

<script>
import { img2Pdf } from '../lib/util.ts';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    register() {
      this.axios.get('/api/queryall').then((response) => {
        console.log(response)
      })
    },
    connectTcp() {
      console.log('开始测试')
      console.log(img2Pdf(2,3))
    },
    async postData() {
      const data = {
        id: 4,
        lastName: 'ffsssaaaaassf',
        email: '5207694232@qq.com'
      };
      this.axios.post('/api/adds', data).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    },
  }
}
</script>
