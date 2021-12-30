<template>
  <swiper id="swiper" :options="swiperOption">
    <swiper-slide virtualIndex="1">
      <div class="welcome">
        <p :class="{ 'ani-slide-in-left': activeIndex == 0 }">Hi~</p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 0 }">您好</p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 0 }">您有一封来自</p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 0 }">
          <span class="bigWorld marginRight">时光机</span>的<span class="pink"
            >报告</span
          >
        </p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 0 }">等待查收</p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 0 }">
          请跟我一起来查收吧~
        </p>
        <div :class="{ 'ani-text-focus-in': activeIndex == 0 }">
          <span>请查收</span>
          <img class="ani-fade-in-bottom" src="./assets/up.png" alt="" />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide virtualIndex="2" :class="[!info.personName ? 'swiper-no-swiping' : '']">
      <div class="check">
        <p :class="{ 'ani-slide-in-left': activeIndex == 1 }">首先</p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 1 }">
          让我们来验证一下
        </p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 1 }">您的</p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 1 }">
          <span class="bigWorld marginRight">真实</span
          ><span class="pink">身份</span>吧～
        </p>
        <div
          class="loginWrap"
          :class="{ 'ani-text-focus-in': activeIndex == 1 }"
        >
          <div class="cellWrap">
            <input
              v-model="cell"
              type="text"
              class="cell"
              placeholder="请输入手机号"
            />
            <img src="./assets/close.png" alt="" @click="clearCell" />
          </div>
          <div class="codeWrap">
            <input
              v-model="code"
              type="text"
              class="code"
              placeholder="请输入验证码"
            />
            <span @click.stop="getCode">{{
              isShowCodeText ? "获取验证码" : second + " s"
            }}</span>
          </div>
          <div class="failMsg" v-show="failMsg != ''">{{ failMsg }}</div>
          <div class="btnWrap">
            <button @click="checkCb">立即查收</button>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide virtualIndex="3">
      <div class="meet">
        <p :class="{ 'ani-slide-in-left': activeIndex == 2 }">
          Hi，{{ info.personName }}～
        </p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 2 }">
          我们在一起<span class="bigWorld pink marginRight marginLeft">{{years}}年</span
          >啦
        </p>
        <p :class="{ 'ani-slide-in-right': activeIndex == 2 }">
          {{ info.entryDate }}
        </p>
        <p :class="{ 'ani-slide-in-right': activeIndex == 2 }">
          第一次<span class="pink">遇见</span>你
        </p>
        <p :class="{ 'ani-slide-in-right': activeIndex == 2 }">
          很高兴有你共度的时光
        </p>
      </div>
    </swiper-slide>
    <swiper-slide virtualIndex="4">
      <div class="growUp">
        <p :class="{ 'ani-slide-in-left': activeIndex == 3 }">2021年</p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 3 }">你一共完成了</p>
        <p :class="{ 'ani-focus-in-expand': activeIndex == 3 }">
          <span class="bigWorld marginRight">{{ formatCodeLine() }}</span
          >行<span class="pink">代码</span>
        </p>
        <p :class="{ 'ani-focus-in-expand': activeIndex == 3 }">
          <span class="bigWorld marginRight">{{info.projectNum}}</span>个<span class="pink"
            >工程</span
          >
        </p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 3 }">一字一句</p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 3 }">
          都记录了你的<span class="pink">成长</span>
        </p>
      </div>
    </swiper-slide>
    <swiper-slide virtualIndex="5">
      <div class="power">
        <p :class="{ 'ani-slide-in-right': activeIndex == 4 }">2021年</p>
        <p :class="{ 'ani-slide-in-right': activeIndex == 4 }">
          你一共完成了
        </p>
        <p :class="{ 'ani-slide-in-right': activeIndex == 4 }">
          <span class="bigWorld marginRight">{{ info.taskNum }}</span
          >个<span class="pink">Jira任务</span>
        </p>
        <p :class="{ 'ani-slide-in-right': activeIndex == 4 }">每个任务</p>
        <p :class="{ 'ani-slide-in-right': activeIndex == 4 }">
          都见证了你克服难题的<span class="pink">力量</span>
        </p>
      </div>
    </swiper-slide>
    <swiper-slide virtualIndex="6">
      <div class="sure">
        <p :class="{ 'ani-slide-in-right': activeIndex == 5 }">
          {{ info.topTaskDate }}
        </p>
        <p :class="{ 'ani-slide-in-right': activeIndex == 5 }">
          你一共完成了
        </p>
        <p :class="{ 'ani-slide-in-right': activeIndex == 5 }">
          <span class="bigWorld marginRight">{{ info.topTaskNum }}</span
          >个<span class="pink">Jira任务</span>
        </p>
        <p :class="{ 'ani-slide-in-right': activeIndex == 5 }">
          成为本年度完成量最高的一天
        </p>
        <p :class="{ 'ani-slide-in-right': activeIndex == 5 }">
          值得<span class="pink">肯定</span>与纪念
        </p>
      </div>
    </swiper-slide>
    <swiper-slide virtualIndex="7">
      <div class="strive">
        <p :class="{ 'ani-focus-in-contract': activeIndex == 6 }">夜深了</p>
        <p :class="{ 'ani-focus-in-contract': activeIndex == 6 }">
          {{ info.latestWorkTime }}
        </p>
        <p :class="{ 'ani-focus-in-contract': activeIndex == 6 }">披星戴月</p>
        <p :class="{ 'ani-focus-in-contract': activeIndex == 6 }">
          <span class="pink">码代码</span>的你
        </p>
        <p :class="{ 'ani-focus-in-contract': activeIndex == 6 }">与月亮为伴</p>
        <p :class="{ 'ani-focus-in-contract': activeIndex == 6 }">
          感谢如此<span class="pink">努力</span>的你
        </p>
      </div>
    </swiper-slide>
    <swiper-slide virtualIndex="8">
      <div class="ciyun">
        <p :class="{ 'ani-slide-in-left': activeIndex == 7 }">2021年</p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 7 }">
          你通过<span class="pink">喧喧</span>发送了
        </p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 7 }">
          <span class="bigWorld marginRight">{{ info.sendMsgNum }}</span
          >条<span class="pink">信息</span>
        </p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 7 }">
          和你聊天最多的人是<span class="bigWorld">{{
            info.topCommPerson
          }}</span>
        </p>
        <div id="ciyunWrap" ref="ciyunWrap"></div>
        <p :class="{ 'ani-slide-in-left': activeIndex == 7 }">相信你</p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 7 }">
          一定为了解决工作上的难题
        </p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 7 }">
          向<span class="pink">沟通</span>小达人而努力
        </p>
      </div>
    </swiper-slide>
    <swiper-slide virtualIndex="9">
      <div class="login">
        <p :class="{ 'ani-focus-in-contract': activeIndex == 8 }"><span class="blue">20</span>21年</p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 8 }" class="blue">{{info.earliestWorkTime}}</p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 8 }" class="blue">
          是你<span class="bigWorld white">最早</span>
        </p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 8 }" class="blue">
          登陆云桌面的时间
        </p>
        <p :class="{ 'ani-slide-in-right': activeIndex == 8 }">{{info.latestWorkTime}}</p>
        <p :class="{ 'ani-slide-in-right': activeIndex == 8 }">
          是你<span class="bigWorld pink">最晚</span>
        </p>
        <p :class="{ 'ani-slide-in-right': activeIndex == 8 }">
          登陆云桌面的时间
        </p>
      </div>
    </swiper-slide>
    <swiper-slide virtualIndex="10">
      <div class="honor">
        <p :class="{ 'ani-slide-in-left': activeIndex == 9 }">2021年</p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 9 }">
          基于你一年的辛勤付出，
        </p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 9 }">授予你</p>
        <p :class="{ 'ani-slide-in-left ani-bounce-in': activeIndex == 9 }">
          "<span class="bigWorld orange">{{ info.honorTitle }}</span
          >"
        </p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 9 }">荣誉称号</p>
        <p :class="{ 'ani-slide-in-left': activeIndex == 9 }">
          要继续<span class="pink">加油</span>哦～
        </p>
      </div>
    </swiper-slide>
    <swiper-slide virtualIndex="11">
      <div class="message">
        <p :class="{ 'ani-focus-in-contract': activeIndex == 10 }">
          <span class="bigWorld">寄语</span>
        </p>
        <div class="content">
          <p>愿你</p>
          <p>眼眸有星辰，心中有山海</p>
          <p>以梦为马，不负韶华</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ info.newYearGreeting || "" }}</p>
          <p class="right">{{ info.topKeyword || '' }}</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide virtualIndex="12">
      <div class="say">
        <p :class="{ 'ani-focus-in-contract': activeIndex == 11 }">
          <span class="bigWorld">小编说</span>
        </p>
        <div class="content">
          <p>&nbsp;&nbsp;&nbsp;此次数据来源于D1项目GitLab、云桌面日志、喧喧日志等～</p>
          <p>&nbsp;&nbsp;&nbsp;所有信息全部经程序采集，采用文本摘要、分词统计、聚类分析等算法，未经人工处理，未有数据泄露，不带任何感情色彩～</p>
          <p>&nbsp;&nbsp;&nbsp;希望过往的每一个数据对每一位辛苦付出的“战士”都是一份“礼物”。</p>
          <p class="right">来年，</p>
          <p class="right">我们会加入更多模型优化～</p>
          <p class="right"><span class="pink">2022</span>更多精彩内容，</p>
          <p class="right">一起期待吧！</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide virtualIndex="13">
      <div class="thank">
        <p :class="{ 'ani-focus-in-contract': activeIndex == 12 }">
          <span class="bigWorld">鸣谢</span>
        </p>
        <div class="content">
          <div class="line">
            <div class="left">图文编辑</div>
            <div class="right">宋哲</div>
          </div>
          <div class="line">
            <div class="left">数据提取</div>
            <div class="right">张伟</div>
          </div>
          <div class="line">
            <div class="left">开发实现</div>
            <div class="right">王华</div>
          </div>
          <p>再次感谢</p>
          <p>以上三位</p>
          <p>小伙伴不辞辛劳</p>
          <p>加班加点贡献大脑细胞～</p>
          <p>笔芯^_^</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import * as echarts from 'echarts'
import 'echarts-wordcloud';
import "./main.css";
import "./animation.css";
import ciyunData from './ciyun';

export default {
  data() {
    return {
      cell: "",
      code: "",
      failMsg: "",
      isShowCodeText: true,
      second: 59,
      timer: null,
      chart: null,
      info: {
        latestWorkTime: "",
        topTaskDate: "",
        sendMsgNum: 0,
        contribution: "",
        projectNum: 0,
        topTaskNum: 0,
        topProjectLines: 0,
        topProject: "",
        commMems: "",
        codeLines: 0,
        taskNum: 0,
        newYearGreeting: null,
        entryDate: null,
        leaveNum: null,
        topCommPerson: "",
        mobile: "",
        keywordCloud: null,
        honorTitle: "",
        personName: "",
        topKeyword: "",
        earliestCommitTime: "",
        latestCommitTime: "",
        earliestWorkTime: "",
      },
      activeIndex: 0,
      swiper: null,
      swiperOption: {
        direction: "vertical",
        noSwiping: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: [0, "100%", 0],
          },
        },
        on: {
          //   init: function () {
          //     // swiperAnimateCache(this); //隐藏动画元素
          //     // swiperAnimate(this); //初始化完成开始动画
          //     console.log(this.activeIndex);
          //   },
          slideChange: () => {
            // console.log(this.swiper);
            this.activeIndex = this.swiper.activeIndex;
          },
          //   slideChangeTransitionEnd: function () {
          //     // swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          //   },
        },
      },
    };
  },
  computed: {
    years() {
      if (!this.info.entryDate) {
        return 0;
      }

      const year = this.info.entryDate.substring(0,4);
      const month = this.info.entryDate.substring(5,7);
      const day = this.info.entryDate.substring(8,10);
      const tmp = new Date(`${year}-${month}-${day}`).getTime();
      const current = new Date().getTime();

      return parseFloat((current-tmp)/1000/60/60/24/365).toFixed(1) || 0;
    }
  },
  methods: {
    formatCodeLine() {
      if (!this.info.codeLines) {
        return 0;
      }

      if (this.info.codeLines >= 10000) {
        return parseInt(this.info.codeLines / 10000) + "w+";
      }

      if (this.info.codeLines >= 1000) {
        return parseInt(this.info.codeLines / 1000) + "k+";
      }

      return this.info.codeLines;
    },
    clearCell() {
      this.cell = "";
    },
    getCode() {
      if (!this.cell) {
        this.failMsg = "请输入手机号";
        return;
      }
      if (this.isShowCodeText) {
        this.timer = setInterval(() => {
          if (this.second == 1) {
            clearInterval(this.timer);
            this.timer = null;
            this.second = 59;
            this.isShowCodeText = true;
          } else {
            --this.second;
          }
        }, 1000);
        this.isShowCodeText = false;
        this.second = 59;

        this.emitCode();
      }
    },
    emitCode() {
      // this.token = 'f6afb0c1-1b8b-40e3-bf2b-a175b00e1783';
      this.$api({
        url: `/yearsummary/mobile/sendVerifyCode/${this.cell}`,
        method: 'get'
      }).then(res => {
        console.log(res);
        if (res) {
          this.token = res;
        } else {
          this.failMsg = '获取身份认证信息失败';
        }
      });
    },
    checkCb() {
      if (!this.cell) {
        this.failMsg = '请输入手机号';
        return;
      }
      if (!this.code) {
        this.failMsg = '请输入验证码';
        return;
      }

      this.getInfo();

      // this.info.personName = '李雷';
    },
    async getInfo() {
      
      const res = await this.$api({
        url: "/yearsummary/view/personal",
        data: {
          "mobile": this.cell,
          "validToken": this.token,
          "validCode": this.code
        }
      });
      if (res.msgStatus == '00') {
        this.info = res;
        this.renderCiyun();
        this.swiper.slideTo(2, 2000);

        clearInterval(this.timer);
        this.failMsg = '';
        this.timer = null;
        this.second = 59;
        this.isShowCodeText = true;
      } else {
        this.failMsg = res.msgInfo;
      }
    }, 
    renderCiyun() {
      const maskImage = new Image();
        maskImage.src= "data:image/jpeg;base64,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AEludHJib29sAAAAAABCY2tnT2JqYwAAAAEAAAAAAABSR0JDAAAAAwAAAABSZCAgZG91YkBv4AAAAAAAAAAAAEdybiBkb3ViQG/gAAAAAAAAAAAAQmwgIGRvdWJAb+AAAAAAAAAAAABCcmRUVW50RiNSbHQAAAAAAAAAAAAAAABCbGQgVW50RiNSbHQAAAAAAAAAAAAAAABSc2x0VW50RiNQeGxAUgAAAAAAAAAAAAp2ZWN0b3JEYXRhYm9vbAEAAAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRvcCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJpbnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcAAAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAFo4QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQAAAAAAAACAAQ4QklNBAIAAAAAAAoAAAAAAAAAAAAAOEJJTQQwAAAAAAAFAQEBAQEAOEJJTQQtAAAAAAAGAAEAAAAFOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAAz8AAAAGAAAAAAAAAAAAAAIfAAAC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ODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMi0yOFQxNjoyOTo0OSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMTItMjhUMTY6Mjk6NDkrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Njc1YTc1NzgtNzhlZS00ZjUyLWI0YjUtOWJlNmVhYTlhNDk0IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OGYwZjJiZDctM2FhMC1iZjQ5LTg1N2EtYWZkOTVhZTc1ZWY0IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZGFlZDliMmYtNTAxMS00ZWE3LWFkZDktNzEwMmExZGIzNjdhIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgcGhvdG9zaG9wOkhpc3Rvcnk9IjIwMjEtMTItMjhUMTY6Mjk6MTYrMDg6MDAmI3g5O+aWh+S7tiDmnKrmoIfpopgtOCDlt7LmiZPlvIAmI3hBOzIwMjEtMTItMjhUMTY6Mjk6NDkrMDg6MDAmI3g5O+aWh+S7tiDngrnotZ4uanBlZyDlt7LlrZjlgqgmI3hBOyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGFlZDliMmYtNTAxMS00ZWE3LWFkZDktNzEwMmExZGIzNjdhIiBzdEV2dDp3aGVuPSIyMDIxLTEyLTI4VDE2OjI5OjQ5KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Njc1YTc1NzgtNzhlZS00ZjUyLWI0YjUtOWJlNmVhYTlhNDk0IiBzdEV2dDp3aGVuPSIyMDIxLTEyLTI4VDE2OjI5OjQ5KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/iDFhJQ0NfUFJPRklMRQABAQAADEhMaW5vAhAAAG1udHJSR0IgWFlaIAfOAAIACQAGADEAAGFjc3BNU0ZUAAAAAElFQyBzUkdCAAAAAAAAAAAAAAAAAAD21gABAAAAANMtSFAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWNwcnQAAAFQAAAAM2Rlc2MAAAGEAAAAbHd0cHQAAAHwAAAAFGJrcHQAAAIEAAAAFHJYWVoAAAIYAAAAFGdYWVoAAAIsAAAAFGJYWVoAAAJAAAAAFGRtbmQAAAJUAAAAcGRtZGQAAALEAAAAiHZ1ZWQAAANMAAAAhnZpZXcAAAPUAAAAJGx1bWkAAAP4AAAAFG1lYXMAAAQMAAAAJHRlY2gAAAQwAAAADHJUUkMAAAQ8AAAIDGdUUkMAAAQ8AAAIDGJUUkMAAAQ8AAAIDHRleHQAAAAAQ29weXJpZ2h0IChjKSAxOTk4IEhld2xldHQtUGFja2FyZCBDb21wYW55AABkZXNjAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAEnNSR0IgSUVDNjE5NjYtMi4xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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mR3D8zvlfnshKzNLX5n5Fdv5StkZzqdpKqu3hPO7O3JJbk+/de6Evrv+ar/Mx6prYa7YPz9+YOCMJDDHt8h+08tgZSp1L93tvN7nyW364KfoJqWQC5/qffuvdWsfHv8A4VifzjekauiTeHbvXHyT29SyRhtv959T7XMr0osssQ3V1VF1hvKaoZblJquvqyr2JV1Gg+691smfDb/haT8UuxqjE7Y+a/x93/8AG/L1BhparsnrKubujrBJbr5spmMDFjcB2XtqgsTpp6Ch3NOCOXN7j3XuttX43fLL40/MHYUPZvxg7x627x2TJ4Eqcx17ufHZyXC1dTGZosXujERSrm9pZvxKWagylNSVqAeqIe/de6ML7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6//9Df49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691S7/P5/mDZ3+W7/LS7h7o6/wAiuJ7p39X4bojovJnxl8N2P2PTZV5N1Uqy6kbJbG2Lgs1nKJWjlikrsdAkqGJn9+6918bfJ5PJZrJZDM5nIV2Wy+WrqvJ5XK5Ornr8lk8lXzyVVdkMhXVUktVW11bVStJLLIzSSSMWYkkn37r3UH37r3Xvfuvde9+691737r3XvfuvdDX0D8kO+/it2Nie2/jj29v/AKW7HwrL9nuvr3cmR27kZqYSxzS4vKpRTJSZ7BVjRAVOPro6ihqkuk0ToSp917re6/lRf8LDsTuKq210p/NO2/QbZyVS9LicZ8tutsBJFtupqHKxRVPcvV+Ep5pNvmVwTNmNtQyUQd1DYmkhSWpHuvdb1Ox987K7N2htzsHrndu29+bE3hiaPPbU3ls/N47ce19yYTIRCahy2DzuIqKvGZTHVUR1RzQyujD6H37r3Sq9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691//9Hf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691ok/8AC4Ptb+H9R/ALo+Cp1DdvY3dva2To0f8AzX+jvbOxto4OpqI78fcf6UMgkJ/5tSD37r3Xzvffuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691d5/J//np/Kz+UzvukxW3MhW9ufFfcGZSr7I+Nu6MxUJg2FTMpyW6+rcnMtX/o53/4ixaenifH5MhVyFNUGOnlp/de6+r58HfnV8bf5iHQO2fkb8YN9Qbw2PnT9hmcTVpFj959e7sp4IJstsTsPbYqKmfbe7MP9wheIvLT1MEkdVSTVNHPBUS+690cD37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691//9Lf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+6918wr/haH3D/fL+ZP0t1JR1XmxvTHxV2tLXU+u/2e7+yd/b83BlV0AkJ5tp47Avc2Y354C+/de60/Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3VmP8rD+aX8h/5UvyQxXd/S+RlzmzM0+Pw3dfS+VyNRTbM7g2NBUvJJismiJUJiN04ZaiWfB5uKF6nF1bsCs1JPWUlT7r3X2HPhV8zeiPn38cevflB8dN0LuXrzf+PLPSVIhp9ybM3PRLHHuPYW9sTFPUHCbw2tXP4KuDW8UimOop5JqWeCeX3XujV+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r//09/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xxof+FCndn+nr+cp8892w1f3VBtXuAdMY5Uk109LH0Ntbb3TdfBTAEqiSZzZFXM4Xhppnb6sffuvdUy+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de62DP+E9P847P/AMrH5WUe3ex85kqr4bd/5fEbb7226z1FXR7Dy0jpjtud6YDHoJHhy2zTKI8zHTo0mTwBmjMc1TTY8w+6919d7F5TGZzGY7NYXI0OXw+YoKTKYnLYyrgr8bk8ZkKeOroMjj66lklpqyhraWZJIpY2aOSNgykgg+/de6ne/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6//1N/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+690j+wt8YHrHYG+Oyd1VIo9sde7P3NvjcdWSoFLgdp4Wtz2YqSXKoBBj6CRuSBxz7917r4OHZ+/872x2V2H2nuiXzbl7L3zu3f+4ptbSeXO7yz+Q3FlpfIwDP5K/IyG55N7+/de6Q3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+nV/wkS/mg1Xyc+LW4Pgd2zuBsh3F8QcRQVnWFZkqszZTd/xryVcmMw1Egld56mTprcFTDhXb0Rw4fIYaBATHI3v3Xutw737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3X//V3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3VI/wDwow+Qn+y4/wAm75rbjpa77TPdkde0PQO3oVk8U9fN3ruLE9bbkp6Z7i0tLsLPZesaxv46Vrc29+6918b/AN+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdWKfyoPnDmv5dvz9+Ofymoqyti2rs/e9Hgu28bR+WT+8HTG9D/dns7FvRR3TIVVPtjIzV+PjdWVMrRUswGuJSPde6+2ti8njs3jMdmcPXUmUxGXoaTJ4vJ0E8dVQ5HHV9PHV0NdRVULPDU0lXTSrJHIhKujAgkH37r3U737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691//W3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Wjj/wtu+RceA+O3w1+KePr7VvZvbm8u8tyUVPJpliwvUe1V2Xt1MiqsGNDmMv21WSQoQUebFFjZol9+69185X37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3X2IP+E2/ywn+W38oP4u5zM5F8lvXpLE5T4zb3lkm+4mSu6XmgwmzWqqhmaaetrupqrbtXO8n7jTVLklr62917q9j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691/9ff49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdfJs/wCFZ3ybTv7+bz2BsTF1/wB7tn4s9Y9ddDY4wS6qGTcH2NX2jvieOMGy5Ci3P2PNiapiAxfEqvKop9+691rNe/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+g7/wAIgO9pqnanzy+MuQr2FPhtw9Q97bSxhkujzblxu5+v+w69YiR42jTae142YX1hgDbSL+691vt+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuv//Q3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+690i+yN/7Z6o68372lvWvXFbN612Xunf8Au3Jvp0Y7bOzsHXbiz1e2tkTTR4rHSyG7AWXkj37r3Xwn/kT3Tub5Id+92fIPebE7s7v7X7B7Y3CnlaZKfLdgbryu6a2jgdgtqShmyhhhUBVSJFVQFAA917oG/fuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdbbv/CMrsCba/wDNT7G2a85FB2b8P+zsN9qWskuX252J1Hu+gqgtxqmpcZhq9F+tknf/AGHuvdfUb9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdf/0d/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvda4v/CqH5cr8Xv5Rvb+08RlRj99fK3cO3PjZtiOKa1W2A3S1VuTtSZqZCJZMZVdX7WymKnk4jjlysAYkuqt7r3XyQffuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691ssf8JK656T+dN0tTqWC5TqX5AUMlvoUj6yzGSAfkenyY5f682/1/fuvdfWg9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdf/S3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+6918w3/hZN8zP9M/z562+JG3Mr9ztD4gdaQVO56SCa8H+mTu2mw28M+swiJhqf4V1vQbXjiLFnpqiesjspZwfde60+ffuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691s6f8ACRXb8uZ/nL9e5GOMum0+ie+dwTsFB8UVTtan2sJCTyoM+5UW459VvoT7917r6wnv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r/9Pf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+690D/AMgu8Nh/Gjozt35CdoZEYrr3pfrvdvZW7qwNGJzhdoYWszVVR0EcjIKrLZIUgpqOBbvUVUscSAu6g+6918Nf5L9+b4+VHyE7q+SHZNQKjfPeHZm8ezdxqkry01DXbuzlZlxh8cZArRYjBU9SlFRRAKsNJTxxqAqgD3XugP8Afuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691uUf8IpOuzm/wCYZ8luzZYTLS7A+IeW21C5Hop8x2F271hUUcwb8StitkV8YH0KyN/T37r3X00Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3X//U3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdaOv8Awsl/mT0mwOmevf5anWm4I23p3VNh+2vkQmPqQ0+D6m2tmBV9c7LyQiYiGo39vzFDLSRErNFSbeh1qYa9C3uvdfOR9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdfQl/4Q79YPS7K/mFdz1MBaPO7p+P3WGGqilhE+08T2juvcsEcn9o1C7zxLOP7PiU/n37r3W+n7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6//1d/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+690Rb+Y78/Omf5afxN7I+VHdFYk1Btaj/hGw9k09ZDSZ7tPs/L09UNm9dbc8iyua3N1dM8tVULFKuOxdPVV0qGGmk9+6918XX5XfJ/tz5nfIntn5Pd6587j7Q7h3ZWbp3FVxiWPHY6Jo4aHB7ZwFLLLO+P2vtHb9HS4vF0xd/t6CkijLMVLH3Xui9e/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuvqt/wDCPnpxut/5QlDv2alMU/yB+R/c3ZsFVIlpKnF7bbbXSlNHG5F2pKfI9UVhUD0iWSQjkn37r3W077917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6//1t/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdJLfu/NmdW7I3d2T2LubDbL2DsLbmZ3fvPd24a2HG4LbW2dvUE+UzWby1fOyw0tBjcfSySyux4VT+ffuvdfIC/nxfziN4/zZ/lRUZfblRmNv/E/pmqzO2fjlsCt8tHNW46onjhzfbW7seW0rvfsQ0MMnhYWxOLipqJdUsdTUVPuvdUY+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+27/KF6Gk+M38sL4LdMVdH/AA7M7Z+NvWuX3VQePxmi3xv3CRdh77pWUhSWg3luuuUsQC5GogE29+691Y37917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6/9ff49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xzaf8AhVR/PGHyC3pnv5avxV3h5+jOtdwpD8mt/ber9VF252ftuvWWLq/FVtI+iu6+6yzVKHyL6miym44AFXw42Gar917rSd9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+690b/8Al/fHKp+XXze+KXxphpJqyj7l74622XuNYA5ek2TXbmoJt+5ZhH+54cHsqnr62TTyI4Gtz7917r7msMMNNDFT08UUFPBFHDBBDGsUMMMShIoookCpHFGigKoAAAsPfuvdZPfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3X/0N/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3WoT/wp7/nor8JOs8l8F/i1vAQfLjuPbFuyd57frgMl8deqNxUjL5aatpX8mJ7Z7ExspTEhStXiMTI2THgmmxc0nuvdfL+ZmZizEszEszMSWZibkknkkn37r3XXv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xutvb/hGx8S5e3/5inYXyhzGLefanxG6eysmHyTQloabtnu+PI7A2xT63XxXbriDd8hsS6SJEbWN/fuvdfUC9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691//9Hf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdUs/zv/wCb711/KT+LFbvRHw26vkx2nBl9sfG7qutmEi5bckFNGuS7B3ZRwTRVqdc9eLWQ1FeUMbV9XJTY+OSJ6ozwe6918e/tjtbsXvTszfXcfbm78zv7s3svc+X3jvjeO4Kn7rLbg3FnKuStyNfVOqxwxK8smmKGJI4KeFViiRI0RB7r3Qe+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r62X/CV34Vy/Er+VL1vvbc2GOM7J+XefyHyQ3KaqDRkINmbgpKPBdO40zEK74yp65w1JnYIyB4ps9OPqSffuvdbI3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuv/S3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+690T753/ADf6M/l4fGPsX5S/ILO/wvZmxqEQ4jBUctOdz9h72yMc67V662TQTyRjJbp3RWwlI1uIaWmjmrKl4qSmqJo/de6+NP8AzDvn13n/ADKPlLv75R985TXnNzzjF7N2bQ1VRNtfqzrnGVNU+1euNoQT6fDhsFBVO8s2hJcjkJ6mtnvUVMrH3XuiQe/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917qyH+Ur8CtxfzJfnv0L8W8bTVw2duDcsW7O587Q+WJtrdJbMlgzPY2XNZGrCgr6/ExjFYyR7I2ZyVHGT+57917r7YOAwOG2tgsLtjbmMosJt7bmJx2BwOGxtPHSY7EYbEUcOPxeMoKWILFTUVBQ08cUUagKkaADge/de6dvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdf//T3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdIrsjsfYnT/X+8+1O0N14XYvXXXm2sxvDe28dxVkdBg9t7ZwFDNkcvmMnVycRUtFR07ObBnYgKoZiAfde6+QV/Pb/nI77/m1fJybI4GfNbX+JnT1fl8F8dutq15KWaso5pVpsp21vagRzC+/t9x00biE60w2NWGhiLyLVVNX7r3VGPv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r6mP8AwlB/lV1nwv8AiJX/AC87g24+K+Q3zIw+EzGFxuUpWgzHXvx2pmXLbDwM0Uy+agyvZFXIu48jGGGqjOJhlSOopJV9+691tj+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r/1N/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+6910SACSQAASSTYADkkk8AAe/de6+Yt/wp8/ntn5l7/wAv8CvihvEz/FDqrcgTtzfm3a6+O+RHaG3K4MlDj66lfx5bqLrzK016FlY0mbzERyC+anpsZOfde608ffuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3W1j/wAJpv5GOW/mB9y4n5b/ACS2hVQfCfpTc0VXjsVm6Jo6P5Idn7fq456XYuOgqUCZLrXa9fEsu56oB6erdFxEet5a16L3XuvqiRxxxRpFEiRxRoscccahI440AVERFAVERRYAcAe/de65+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r//V3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3WkH/wqb/nuf6D9t7o/lo/EXeXj7l3rhTjvlN2btyvtUdVbFz1Crt09t7IUkmun7C31iKpWzU6sGw+EnFOl6uuZ8f7r3Xzg/fuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3W1t/wnw/4Tqt/M4xkPy1+TG6q7Z3w+2pv+u2tj9j7baqo9/wDfmb2qlBU5/GUefXwxbL65pKyuShrcrTGfJVc8NVSUgpJY/vofde6+oV1p1n19011/tDqrqnZ23uvut9gYHH7X2ZsramMpsPt7beAxcK09DjMXjqRI4aeCGNbk2LyOWdyzszH3Xulx7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6//1t/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvda6v8AwoU/nabc/lWfH0dfdUZTEZn5td54HIU/UW3ZBS5KPq3a0z1GLyXeW8MXKJYfssTVRy0+36OpQxZbMxNeOakoq9V917r5J26N0bk3vuXcO89457L7p3du3N5Xcu6NzZ/IVWWzu4dw52unyeZzeZylbLNWZLK5XI1Uk9RPK7ySyyMzEkk+/de6Yvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3V6/wDLb/4URfzCf5XvT79AdHN0p2J05BuPNbpwOxu8th7h3NSbTyu45Fqs+NuZjY2+eudz02Py2RBq5KWeuqKdKp5JIkjaWXX7r3Vkkn/C1T+aa6MqdDfAOIsmkSL1Z8h2dGK2Lp5PlM8dw3IDKw/rf37r3TRUf8LQv5rcwUR9TfBml03uafqXuli97WDfdfIypA02402+vPv3XumKr/4WWfzaqnV4dm/Dagu4YfadO9iPoABHjX77uutuh+vN2/x9+690m6r/AIWH/wA36oJMR+LVCNbPal6TyjgKb2iH3u/6w6Evxzq45J9+690mar/hXl/OSqLeLevQFFbXf7XonBPq1W03+9ylX/m7cWt9eb8e/de6TlT/AMK1v5009vF3N1HR2Uj/ACb4/wDWjXJ+jn7vE1XqX8WsP6g+/de6TtR/wq7/AJ3E9vF8ldi0dgQft/jt0Q2on6Mfu9g1XK/i1h/UH37r3SeqP+FUP88qbT4/mHhqTSGv9v8AG34uNrvaxb7rpqpsVtxa315v7917pO1H/CoP+elU6PJ86KldGq32/wAcviPSX1Wvr+16Eh8n6eNV7fj6n37r3TZP/wAKbf55FQ4eT525xWChQIOjPjBSpYEm5jpuk4Yy12+pF7cXsB7917pun/4Us/zv6hw8nzy3arBQtoOpPjtSpYEm5jpuoIYy1z9SLn+vA9+691Bf/hSR/O3kmSdvntvsOltKp1x0THCdJJGumj6rWnk+vOpTf8+/de6mQ/8AClf+d9BIsifPLd7Mt7Cbqb481EfIKnVFP1DJE3B4uDY8jn37r3Q1dbf8Kuv52Ww8nT1u4PkdsTt7HwOGO3+yfj90tTYyoQG5iqK7rHZnW25nRj9SMgrj8MOLe691dz8Wf+FudaJ8Zh/mv8L6SSncxDLdhfF/d81PLALhZWouoe1KyqWq1Alhr3rFptp0te4917rau+EX87L+Wh/MDfFYX4+fJzZw7Jyoiji6X7MaXq3txq6QAtjsVtHeIx399KmAMPJJt6fMUq3/AM7e9vde6tY9+691737r3Xvfuvde9+691737r3Xvfuvdf//X3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdVsfzVP5mfSn8q34o7r+RPa0sGc3TUio2x0p1PT18dHn+2+z6qjmmxG3KFis0uP29jgn3mcyfjkTG42J2VJql6amqPde6+Nx8sPlT3X81vkF2X8mfkHuyfeHaXaWemzWbriJIcZiaNESlwm1dsY55p1wu0tqYeCGgxlEjMKekgRSztqdvde6Lr7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuuccjxOksTvHJG6yRyRsUeN0IZHR1IZXVhcEcg+/de62H/5cf8Awpm/mQ/AapwW0d076n+XHQOO+2pJupe+s3lMvuDDYmEqppuu+4JFyO+NpSwUyLDS09ac1hKSIWjxoNmHuvdfQz/lgfz4fgZ/NLoKHbnVm9perfkItAarN/G3tmox2D7CLU0DS5Cr2HXRVD4DtHBUwhkk82Imevp6ZRLXUVFrVPfuvdXR+/de697917r3v3Xuve/de6//0N/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+690B/yS+RvT3xI6N7J+Rnfe8KDYvU/VO26rc27NwVxDusELR09DicTRKwnzG49wZSogoMZQQBqiur6mKCJWkkUH3Xuvjh/zdf5pncP82D5Xbg7136a/bPWW3TXbV+P/AE+a77jFdXdbrWCWngmWFvtK/fG6XhjrtwZIAtV1mmGMpRUtHBB7r3VWfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6dcHnc3tjNYncm2sxldvbiwGSosxgs9g8hV4nNYXL42ojq8dlcTlKCanrsdkqCrhSWGeGRJYpFDKwIB9+691vgfyRf+FYubxFdtD4tfzUNyPmsBUvRbd2F8yqiInNYOVmSlxuM+Q9LSxkZvEOCsX97qeNa2mKrJloqlZKnJ0/uvdfQSxGXxO4MTi89gMpjs3gs3jqLL4XNYitpslicviclTRVmOymLyNFLNR1+Or6OZJYZ4neOWN1ZWKkH37r3Tj7917r3v3Xuv//R3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691Frq6ixlFV5LJVdLj8dj6Worq+vrqiKkoqKipInnqqurqp3jgpqWmgjZ5JHZURFJJAHv3XuvlJ/8KU/52lb/ADIO/pfjn0DuqWT4TfH3ctXDt6sxVS64/vrtDHLU4rLduV3iYR1208Uks9DtSNtQNFJPkCQ+QENN7r3Wr77917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xutwb/hN1/wAKEs58MN4bS+D3zJ3pVZT4e7yy0GF6v7E3JWyVE/xi3Rl6orS01VkKkvInSOfyNQFroHbw7eqJPvofFTGtV/de6+ndDNFURRTwSxzwTxpNDNC6yRTRSKHjlikQskkciMCrAkEG49+691k9+691/9Lf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+690gO0+1utOj+vt1dr9w772r1n1rsfEz5zd2+N65ug29trb+Lp9IeqyOVyU0FLD5JHWOJNRkmmdY41aR1U+69180f+fl/wpl3R85aTdnxC+DdduLrz4iVMlThexe0aiKt272F8kKJGMVRiIaGUU+T2N05XkEvj5hHlc7BpGQWmp3mxze691p/e/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+m5/wkm/m15P5T9BZr4Bd6bnky3eHxa2xRZTqDO5itafMdgfHOKrpsJTYeaWd3lrct0tlKyjxZcspfB1+NRUdqSpmb3Xutxz37r3X/9Pce+cn8xT4e/y4+tKPtL5ddx4XrPDZqqqcdtDb6UuR3Hv3fmVpIo5anHbK2Pt+lyG4s6aMTxfdVSQLQUAmjarqIEkVj7r3WvVkf+Fpf8quhrailpulvnlmIIZGSPJY7qjoeKiq1UkCanjy/wAmsXkVjccgS08T2+qj37r3UH/oNW/lZf8APg/n/wD+is+Ov/3VXv3Xuvf9Bq38rL/nwfz/AP8A0Vnx1/8Auqvfuvde/wCg1b+Vl/z4P5//APorPjr/APdVe/de69/0Grfysv8Anwfz/wD/AEVnx1/+6q9+6917/oNW/lZf8+D+f/8A6Kz46/8A3VXv3Xuvf9Bq38rL/nwfz/8A/RWfHX/7qr37r3Xv+g1b+Vl/z4P5/wD/AKKz46//AHVXv3Xuvf8AQat/Ky/58H8//wD0Vnx1/wDuqvfuvde/6DVv5WX/AD4P5/8A/orPjr/91V7917r3/Qat/Ky/58H8/wD/ANFZ8df/ALqr37r3Xv8AoNW/lZf8+D+f/wD6Kz46/wD3VXv3Xuvf9Bq38rL/AJ8H8/8A/wBFZ8df/uqvfuvde/6DVv5WX/Pg/n//AOis+Ov/AN1V7917r3/Qat/Ky/58H8//AP0Vnx1/+6q9+691zj/4WqfysHdEbob5+RKzqrSydV/HgpGGIBkcRfKaSQogNzpVmsOATx7917q6P+Xb/Oj/AJfn8z45HCfGPtycdnYTGvmc50l2XhZdh9s4/DxGFajMUmBqqmtxO68RRSTolVVYKvylPRvIi1DxGSMN7r3Vq/v3Xuve/de697917r3v3Xuve/de6gZXK4vBYzIZrN5Kgw+GxNFU5LK5bK1lPj8ZjMdRQvUVlfkK+rkhpaKipKeNpJZZHVI0UsxABPv3XutWf+Yp/wAKzv5fnxGbcGwfjR9383e6Ma1TQX65y0WD6HwWUi1Rk5nuWooslT7qjhZlkQbXoc1SVIDRNXUz8j3Xuvn1/wAyD+b784P5pO80znyY7NdOv8Nk5sjsXofYUVVtfpnYjuskcVRjdrCtrKncGeigmeP+MZuqyeW8cjxLUJARCvuvdVhe/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917o+H8sn5mbg+AHzt+NfytwtXXQ4vrPsfEHsLH0LOZNxdS7kZtsdqbcMC3jqJsrsTL1y0utXWGtEEwUvEhHuvdfbW/0ibD/AOew25/x5v8ApE/4u9F/x4f/AD2H+e/49z/pr/zH+1e/de6//9TV+/nvfMTsT5nfzSPlrvLemar63bXVnbm++gOodvzVEj4zafV/Tm7c1svCUuJomZo6B9y12Mqs7Xqt9eTylQ1yCoHuvdVAe/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6GH4/d8do/GDuvrH5B9Lbnrdndo9R7ww+9dm5+hllQ0+UxFQJWoq+GOSJcjg8zSGWiyNFITBXUFRNTzK0Urqfde6+6R0l2XSd0dMdRdxUFE+Moe2OsNg9l0WOkk8smPpN97UxO6KaiklKoZHpIcqsZbSLlb2Hv3XuhP9+691737r3XvfuvdU7/zWP53Hw1/lO7M/wCMt7gk7G77z2Lav6++NXX+Rx83Ye4I5Q8dFnN11MxnoettiS1KFWy2SQyVCpKMfS180MkI917r5kn8zr+ep88v5o+bymI7X7Al61+P7ZD7jbvxo6rrchgutKSmp5xLjZ96SiZcz2luGm8aSGszUs1PDUh5KGkoUfxD3Xuqavfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691tl/8ADxm9P+epk/7ht/8AZIf+B8v/ADNv/nvP1f8AH7/83f8AePfuvdf/1dLP59f9l1/NT/xbT5G/+/h3l7917opfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+6J8Bf+yFPhX/AOKl/HL/AN89s337r3RtPfuvde9+691rif8ACiD+d7T/AMqHpDAdddMLh878ze/MRlpesaTLU8GTw3U2yKOZ8Vlu5dz4eZZIMrURZPVRbdx1QopchkoZ5pxNTY+opaj3Xuvk+9ndodi909gbt7W7b3tuXsbsnfmaq9xby3vvDL1md3JuPNVrBqivymUr5ZqmolKqqItwkUSLGgVFVR7r3SE9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdCb/B96/wCorP8AmWX8Y/4Dz/8AHlf6v9X/AAD/AObn6P8AD37r3X//1tLP59f9l1/NT/xbT5G/+/h3l7917opfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+6J8Bf+yFPhX/AOKl/HL/AN89s337r3RtPfuvde9+6918pX/hX/uCqzP84nPY6oqJJ4tp/G/o3b9FE7My0dLUwbn3S9PEC7BI2rdyzSkAKNcrG1ySfde61cffuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdbq/8AwzLuv/nlpv8AuGM/09/5iX/sp7/ngP8AN/8AF8/2r9H+Pv3Xuv/X0s/n1/2XX81P/FtPkb/7+HeXv3Xuil+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r7onwF/7IU+Ff8A4qX8cv8A3z2zffuvdG09+691737r3XyYP+FatT5/503c8WsP9l1J8f6bSBbx6+s8RWaCbDUT93qvzw1vx7917rWm9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdHh/lrfE3KfOX54/Fn4r4+jqaug7a7d2zjN6PSLI0+N6xwk77q7VzaGOxD4PrjBZSrW5QM8IXUt7j3Xuvt9f3W21/zz2E/4sP91v8Ai10X/Htf889/mP8Aiyf9Mv8AmP8Aaffuvdf/0NLP59f9l1/NT/xbT5G/+/h3l7917opfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+6J8Bf+yFPhX/AOKl/HL/AN89s337r3RtPfuvde9+6918kb/hWBK8n87T5GI1tNP198eIo7C1kbpDZM5v/U+SZv8AYe/de61wPfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3W/wC/8Ivf5edTE3d38yvsHByRQT09f8ePjrJXQWWqU1FDlu6N9Y9JlBMcM1LjNv0VbCSC38Zpibqw9+691v8Afv3Xuv/R0s/n1/2XX81P/FtPkb/7+HeXv3Xuil+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r7onwF/7IU+Ff8A4qX8cv8A3z2zffuvdG09+691737r3XyPP+FXMqSfzufkyikloNkfHWKS4tZz0J19OAP6jxzL7917rXK9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Rr/g78PO1/nv8qOnPih0zQmfefbW6qbDyZeammqMTsza1IkmS3lv7cPgKum39lbZpKrI1QUiSZYBDEGmkjRvde6+2Z8Wfjb1h8Pvjt098Y+msT/ButeltjYfZG2oHEX3teuPiaXK7izMsMcUdXuPdecqKnKZOoCqanIVk0pALn37r3Q++/de6//S0s/n1/2XX81P/FtPkb/7+HeXv3Xuil+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r7onwF/7IU+Ff8A4qX8cv8A3z2zffuvdG09+691737r3XyMv+FWP/b7/wCU/wD4aXxy/wDgd+svfuvda6nv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuu1VmYKoLMxCqqglmYmwAA5JJ9+6919VT/hMD/Jom/l8/HKf5R9+7WGP+Xnye23jKmXD5aj8WZ6S6Tqnpc3t7riWKdBVYzd+7qmKnzG5om8bwSxUOPkjSbHzNN7r3W1H7917r3v3Xuv/9PSz+fX/ZdfzU/8W0+Rv/v4d5e/de6KX7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuvuifAX/shT4V/wDipfxy/wDfPbN9+690bT37r3XvfuvdfIy/4VY/9vv/AJT/APhpfHL/AOB36y9+691rqe/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de63af+Esn8iifvreG1v5lXyz2ffozr/OHI/GPrjcVBeHt/sTb9cyR9q5ugqk01HW/XmZpSMXEylMznoNbEUlA8Vd7r3X0j/fuvde9+691737r3X//1NLP59f9l1/NT/xbT5G/+/h3l7917opfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+6J8Bf+yFPhX/AOKl/HL/AN89s337r3RtPfuvde9+6918iT/hVMSf54/y7uSbYD43Af4D/ZZOoTYf0Fz7917rXi9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdWJ/yluoPjT3/APzHfiJ0t8u8hmKDoTszt7CbQ3XFhqxMY+dzOXhq6fYGzsrljLBUYjbW9+wmxeHylXTyRVdPj66Z4JIZQs0fuvdfbI2vtjbeydtbf2bs7A4fau0tp4XF7b2vtnb2OpMRgdvbfwlFBjcNhMLiqCKChxmKxePpo4KenhRIoYkVVAUAe/de6fffuvde9+691737r3X/1dLP59f9l1/NT/xbT5G/+/h3l7917opfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+6J8Bf+yFPhX/AOKl/HL/AN89s337r3RtPfuvde9+6918iP8A4VS/9vx/l5/2ofjd/wDAx9Qe/de614/fuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3U/FZXJYLKY3N4avq8VmMPX0eVxOToJ5KWux2Sx9RHV0NfRVULJNTVdHVQpJHIhDI6gggj37r3X3Af5Zvy2ovnV8CPiv8q4Kilny3bXUm3shvhKJYkpKHtHb4m2h2viqaOKyx02K7I2/lKeIWU+KNSVW9h7r3R6Pfuvde9+691737r3X/1tLP59f9l1/NT/xbT5G/+/h3l7917opfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+6J8Bf+yFPhX/AOKl/HL/AN89s337r3RtPfuvde9+6918iP8A4VS/9vx/l5/2ofjd/wDAx9Qe/de614/fuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdfSo/4RU/J99+fDn5NfFHL17VGU+Pfc2G7G2xDPJZqfYfe2Cqozi8fET66TGb562y9ZMVB0S5hdR9ae/de63UPfuvde9+691737r3X/19LP59f9l1/NT/xbT5G/+/h3l7917opfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+6J8Bf+yFPhX/AOKl/HL/AN89s337r3RtPfuvde9+6918iP8A4VS/9vx/l5/2ofjd/wDAx9Qe/de614/fuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdbZ/wDwjc7tm67/AJqG6+qKirKYn5BfGfsbbMGPMhSOo3ZsHM7V7Nw9cEvaWooNsbazsaj8JVOfx7917r6lPv3Xuve/de697917r//Q0s/n1/2XX81P/FtPkb/7+HeXv3Xuil+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r7onwF/7IU+Ff8A4qX8cv8A3z2zffuvdG09+691737r3XyI/wDhVL/2/H+Xn/ah+N3/AMDH1B7917rXj9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691dT/AMJ1t8z9e/zqPgJnYJvC2S7V3DsaQ6rB4OzOr9+ddTQtyA3mj3SVA/1RHv3Xuvsn+/de697917r3v3Xuv//R0s/n1/2XX81P/FtPkb/7+HeXv3Xuil+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r7onwF/7IU+Ff8A4qX8cv8A3z2zffuvdG09+691737r3XyJ/wDhVRE8f88X5bu62WbbvxvliNwdSD40dSQlrAkj9yJhzY8f09+691rv+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6tQ/kfU9TVfzef5dUVKbSr8ruqKhjZm/yaj3BDV1gspB9VHBIL/QfU8e/de6+1R7917r3v3Xuve/de6//0tLP59f9l1/NT/xbT5G/+/h3l7917opfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+6J8Bf+yFPhX/AOKl/HL/AN89s337r3RtPfuvde9+6918jL/hVj/2+/8AlP8A+Gl8cv8A4HfrL37r3Wup7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917q+X/hMz1VV9rfzrfhjTR0zTYzYWZ7K7VztQE8iUFJsLqPfWWxFTIPws+7v4bTK39l6hT+PfuvdfYT9+691737r3Xvfuvdf//T0s/n1/2XX81P/FtPkb/7+HeXv3Xuil+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r7onwF/7IU+Ff8A4qX8cv8A3z2zffuvdG09+691737r3XyMv+FWP/b7/wCU/wD4aXxy/wDgd+svfuvda6nv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xut77/hE18Qq/KdlfLP51Z7FumD2ltTE/GTrfIzxa6av3Lu3IYTsftGSiZl0w1+2cFt7bcJdfUYM66AgFwfde6+h17917r3v3Xuve/de6//U0s/n1/2XX81P/FtPkb/7+HeXv3Xuil+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r7onwF/7IU+Ff8A4qX8cv8A3z2zffuvdG09+691737r3XyMv+FWP/b7/wCU/wD4aXxy/wDgd+svfuvda6nv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917oUukeluzPkb271z0T01tTI737S7W3bh9lbI2vi49VTlM5mqpKanEsrWgocdRoWqKyrmZKaipIpJ5nSKN3X3XuvtX/wAsf4J7K/lu/CXo/wCJWzpqPK1mwNuff9ibupIHgG/O2NzTNm+xd4HzItZ9lkdx1csWOjnLS0mIp6SlLEQL7917o+/v3Xuve/de697917r/1dLP59f9l1/NT/xbT5G/+/h3l7917opfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+6J8Bf+yFPhX/AOKl/HL/AN89s337r3RtPfuvde9+6918jr/hVvB4v53fydk1avudlfHSe1raNPQPXdNpvc6r/b3vx9bfi/v3Xutcz37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdL/qzqnsrvDsLafU3T2xd09l9l76y9Pgdn7H2Xhq3P7l3DlqnUyUmOxePimqJvHEjSyvYRwQo8sjLGjMPde6+pj/AMJ6f+E/WB/lh7UX5I/JKnwG8fnJ2Bt56B46GSkzW2vjptHMQIchsXZuURZKfK78zELeHcWdpmMBjvjse7Uf3NVkvde62iPfuvde9+691737r3Xvfuvdf//W0s/n1/2XX81P/FtPkb/7+HeXv3Xuil+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r7onwF/7IU+Ff8A4qX8cv8A3z2zffuvdG09+691737r3XyQf+FXv/b7f5Jf+GH8dv8A3xWw/fuvda4vv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6td/kad+SfGv+bd8C+zWr2xuMqu/9q9X7iqzL46aDbHeCVnTG4amvuwRqCgxW/JamTVfQIQ4GpV9+6919pv37r3Xvfuvde9+691737r3Xvfuvdf/X0s/n1/2XX81P/FtPkb/7+HeXv3Xuil+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r7onwF/7IU+Ff8A4qX8cv8A3z2zffuvdG09+691737r3XyS/wDhWJCkX87H5Cut71HXPx5mkubjWvS+z6caeBYeOBf9jf37r3Wt37917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xun/au5ctszdG294YGoNJnNqZ/D7lwtUL3pstgsjT5THVA0lWvDWUqNwQePfuvdfey2TurH762ZtHe+IbVit47YwG6sYwYOGx+4cVSZeiYOLB701YvI4Pv3XulP7917r3v3Xuve/de697917r/9DSz+fX/ZdfzU/8W0+Rv/v4d5e/de6KX7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuvuifAX/shT4V/wDipfxy/wDfPbN9+690bT37r3XvfuvdfJQ/4Vkf9vr+/f8AxGnx6/8AfPbV9+691rbe/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuvuU/wAuDcc28P5ePwM3bUMXqN0/DD4ubjncsHLTZvo/Y2TlYuCQ5Z6om9+ffuvdHP8Afuvde9+691737r3Xvfuvdf/R0s/n1/2XX81P/FtPkb/7+HeXv3Xuil+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r7onwF/7IU+Ff8A4qX8cv8A3z2zffuvdG09+691737r3XyXP+FaUaJ/Oo7tZVCtL1R8fpJCP7bjq7BxBj/iI41H+sPfuvda1Xv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r7gH8qiilxv8AK9/lv0E7M01H8DPiFTyliCRJF8fuvUdARxoRgVX+igcn6+/de6Px7917r3v3Xuve/de697917r//0tLP59f9l1/NT/xbT5G/+/h3l7917opfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+6J8Bf+yFPhX/AOKl/HL/AN89s337r3RtPfuvde9+6918l/8A4Vqf9vpu6f8AxEvx/wD/AH2OH9+691rT+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuvvDfGHr9up/jV8eerHgalfrTo3qXr9qZlKNTts3YOA260DIQCrQnG6SPxb37r3Q5e/de697917r3v3Xuve/de6/9PSz+fX/ZdfzU/8W0+Rv/v4d5e/de6KX7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuvuifAX/shT4V/wDipfxy/wDfPbN9+690bT37r3XvfuvdfJt/4VwAD+c/2rYAX6X6CJ/xP9xIBc/1Nh7917rWZ9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3R2/5bHx8q/lX8/vh18fKehbIUfZ3yH6uwm5YVj8vh2LS7px+a7CyLxW/cixGxsZkat14BSEgkfX37r3X3Hffuvde9+691737r3Xvfuvde9+691//9TSz+fX/ZdfzU/8W0+Rv/v4d5e/de6KX7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuvuifAX/shT4V/wDipfxy/wDfPbN9+690bT37r3XvfuvdfJz/AOFckLx/znOzXa2mo6R6EmjsbnQuyxAb/wBD5IG/2Hv3XutZP37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdbm//CMn4UVnaXzN7d+be5MSX2X8W+v6rY2w8jUQlUn7m7noqzCzz4yodTHUNtrqmmzcNdGvriOfo2JAcBvde6+mD7917r3v3Xuve/de697917r3v3Xuv//V0s/n1/2XX81P/FtPkb/7+HeXv3Xuil+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r7onwF/7IU+Ff8A4qX8cv8A3z2zffuvdG09+691737r3Xyff+Fdn/b5bf8A/wCIH6H/APeZq/fuvdaxPv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xulh171/vXtjfmzesOt9tZXeXYHYW6MHsvZO08FTNV5jcm6dy5KmxGCwmMplI8tbkslVxxRgkLqa5IFz7917r7SH8oH+Xltz+WJ8DenfjBQtj8hv2mo5t/d57oxyqYN292bzgoqvetfBUCOJqzEYFaWmwWKldEkfD4mkMiiTXf3XurOPfuvde9+691737r3Xvfuvde9+691/9bSz+fX/ZdfzU/8W0+Rv/v4d5e/de6KX7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuvuifAX/shT4V/wDipfxy/wDfPbN9+690bT37r3XvfuvdfKL/AOFe6gfzj92EAAt8eei2YgAFj/C82t2/qdKgf6w9+691q9+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XussMM1TNFT08Us9RPLHDBBDG0s000rBIoookDPJLI7AKoBJJsPfuvdfSo/4TFfyA8z8TqLEfzB/mjsz+F/I7dOCkHx+6g3HQ2y3Q+0twUMlPX773jQ1Sa8X25vDD1TU1PQMqz7exM8sdTavrJqfH+691ul+/de697917r3v3Xuve/de697917r3v3Xuv/X0s/n1/2XX81P/FtPkb/7+HeXv3Xuil+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r7onwF/7IU+Ff8A4qX8cv8A3z2zffuvdG09+691737r3XylP+Ff0Ai/nFZ+QMW+5+OHRs5FraCtPuam0g3NwRT3v/j7917rVy9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdbuX/CMn4afF/v3tX5W/Ijt/rXG9h9xfFbJdBy9L1W6HGT23sWs7Mi7dnq94UG1ZkONqt60NX1zF/DsjVLO+NYGWkWGoAmHuvdfSG9+691737r3Xvfuvde9+691737r3Xvfuvde9+691//0NLP59f9l1/NT/xbT5G/+/h3l7917opfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+6J8Bf+yFPhX/AOKl/HL/AN89s337r3RtPfuvde9+6918p3/hYKjr/OFybMrKJPjP0g8ZIIDoJN4xllJ/UodGF/6g+/de61affuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3W/j/AMIZllNd/M8YavCKT4ZrIQTo8rTfKkxahexYqj2/wv7917r6A/v3Xuve/de697917r3v3Xuve/de697917r3v3Xuv//R0s/n1/2XX81P/FtPkb/7+HeXv3Xuil+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r7onwF/7IU+Ff8A4qX8cv8A3z2zffuvdG09+691737r3Xyqv+Fh/wD29+P/AIq10n/7tOwPfuvdarnv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r6GH/AAhx21LS9d/zHN4mIiDO70+Me2o5tNhJLtPB94ZSaIP/AGjCm9Izb8a/8ffuvdb5Hv3Xuve/de697917r3v3Xuve/de697917r3v3Xuv/9LSz+fX/ZdfzU/8W0+Rv/v4d5e/de6KX7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuvuifAX/shT4V/wDipfxy/wDfPbN9+690bT37r3XvfuvdfK1/4WMRJH/N4oHRbNP8T+lpZTcnU43H2bCGsSQv7UKiwsOP639+691qo+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuvp6/8ACLfrWfbH8tHu/sWtp/DP2f8AL3eK4yXQQavbmyOr+q8LSz6yBqVNx1eWisLgGM83JA917rcD9+691737r3Xvfuvde9+691737r3Xvfuvde9+691//9PSz+fX/ZdfzU/8W0+Rv/v4d5e/de6KX7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuvuifAX/shT4V/wDipfxy/wDfPbN9+690bT37r3Xvfuvda0H88z/hOj11/NizkXyH637VyPTPy52zsTHbGxFfuU1We6b7A27t6rzGTwW395Yekhnz+0K6nrM1OkeaxP3Aiikbz42tYRtH7r3XzNfm1/L4+Xf8vDtCbqj5ZdNbl6zzU0tU22NxywjLdfdgY2lkCnNdfb8xn3G291Y8o6NKkE/3dEZBFVw084aJfde6Jh7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuvse/wDCcnouboH+TJ8Idu19KafM7969zPeWVkePxSVkXeO89x9nbZqJFsP83sfcmKgQ/wBqOFT+ffuvdXd+/de697917r3v3Xuve/de697917r3v3Xuve/de6//1NNr+ZbtDObC/mKfO7aG46KegzGD+YHyPpamCeJ4TJG/b27qmirYVcXejyVBPFU08gussEqOpKsCfde6JJ7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917rwBJAAJJNgByST9AB/X37r3X3ZvhptXO7F+IHxT2RuigmxW5dnfG3ozau4sXUo0dRjc7t7rDa+Iy1BPG4V45qOvo5I3BAIZSD7917oyXv3Xuve/de697917oGe/Pjv0Z8pes89038iuqdj9ydY7kj05XZ2/cDR53FtUJHJHTZTHmpjNVhc9jvMz0mRopKeuo5bSQTRuAw917rRJ/mff8ACNzOY2XcXbP8rjfIzuMP3WTm+KvcW4YqbOUg9cv8N6o7gyskWOy8Wpljpsfup6SWKNC0uaqJGCe/de60e+7OiO5/jb2LnepO/ert89Pdl7bl8eZ2V2FtvJ7Yz1Kjs609bHR5SngatxVcsZelrIDLSVcVpIZHQhj7r3QT+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917oV+iOn91/ITu7p/obYsBqd590dnbE6r2rEInmU5/f258ZtbFPKiEN4IazKI8huAsakkgAn37r3X3aesuvtt9S9bdfdVbOpTQ7R6y2PtPr7atESpNHtvZmBoNuYOlJUKpNPjMbEnAA49+690uPfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdf/VsH/n7/8ACaKT+Yz2JW/ML4e7q2d118o8lh8Zje09h77kq8T193cm3cdBi8FuWn3Li6DKVOz+yqLBUUGNd56WbGZanp6XzPQyQzVNT7r3WoDX/wDCWn+ejR1lTS0/wppMrBBK0cWRoPkt8So6OsRTYT0yZPvXHZBYn/Amgik/qo9+691E/wCgXH+ev/3gz/7Mz8PP/ugvfuvde/6Bcf56/wD3gz/7Mz8PP/ugvfuvde/6Bcf56/8A3gz/AOzM/Dz/AO6C9+6917/oFx/nr/8AeDP/ALMz8PP/ALoL37r3Xv8AoFx/nr/94M/+zM/Dz/7oL37r3Xv+gXH+ev8A94M/+zM/Dz/7oL37r3Xv+gXH+ev/AN4M/wDszPw8/wDugvfuvde/6Bcf56//AHgz/wCzM/Dz/wC6C9+6917/AKBcf56//eDP/szPw8/+6C9+6917/oFx/nr/APeDP/szPw8/+6C9+6917/oFx/nr/wDeDP8A7Mz8PP8A7oL37r3Xv+gXH+ev/wB4M/8AszPw8/8Augvfuvde/wCgXH+ev/3gz/7Mz8PP/ugvfuvde/6Bcf56/wD3gz/7Mz8PP/ugvfuvddr/AMJcf565IB+DYUEgFm+TPw9soJ/UdPyBZrD/AABPv3XutgH+TZ/wkl7R647s2D8mf5mNfsSlxPWWexu8Nm/FzZ2bpd9z7l3fg6mHIYKr7g3ZjVfZ6bVwuUgSobC4qoyqZhkWOrqIqYTU1V7r3W/x7917r3v3Xuve/de697917r3v3Xuve/de6KH8wvgX8Qvnx183Wvy16I2N3Ht+CKqXB5HO0ElDvPZ1RWKqz1+xd/YWbG702XXy6F8kmNrqbzhQkokS6n3XutFf+Y7/AMI0O3tivnOxv5a3aEfc211NTXD499z5XCbW7Ux0fqkXH7L7N8WG6/3sNTaY4cxHtyWGFADU1kpJPuvdaZfeXx97y+M3YGU6q+QvUnYPTHYuGJNds/sfauX2pmhTmSSOHI0dNlqWm/ieHrDGWpq2mM1JUx2eKR0IY+690D/v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917ra5/wCEhnwjqPkb/MlqvknuLEfedbfCvZNXvk1NRAZsfU9w9i0mX2V1biZAyiP7mgxpz2egkDaoavBwG3qBHuvdfU/9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3X/9bf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Rcvkz8Q/jF8y9gzdYfKXozrjvHZT+dqTGb827SZOswVVUxrFNk9p7gQQbj2bm2iUKK7E1dFWKvCyge/de602vn3/wi4623Oc1vj+XL3xV9Z5eQz1lP0R8hKnJbp2E8jEumP2t23haCt3xtqjgjQJDDmMbuOaaR7yV0SD37r3WmJ81P5U/8wH+XxkqmD5U/GfsLYW2YqsUlF2hjaGLenT+XeWXx0Yx/aOz5s1syOsrlZXjoaqrpskisBLTxvdR7r3Venv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917rJFFLPLFBBFJNPNIkUMMSNJLLLIwSOKKNAXkkkcgKoBJJsPfuvdfY0/4T5/y3pf5a/wDLl6z2BvPDDF9+9zSr3r8gVqKdY8niN6bxxePTCde1bMGmi/0Z7Oo6HFVEAkkgGYjr54rLUm/uvdXge/de697917r3v3Xuve/de697917r3v3Xuve/de697917r//X3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdQMrisXncbX4bN42gzGHytJUY/KYnK0dPkMbkqCriaCqoq+hq45qWspKmFykkciMjqSCCD7917rX5+bH/AAmJ/lP/ADI/i+fxnS9R8Wezcl5pxv34w1VD19jpK59UkcmV6rqMdlupqynlqmL1TUuGoMhUhmBq0Yh1917rUj+ZH/CNf599N/xXcPxL7L6w+Xu0qbzzUm2ameDpDuJoRqlWFMBvHMZDrfJeCEaDKm6qeeeQDRSrqCr7r3Wr/wDIX4kfKH4mbl/uj8mfj9290Vnnnlgoqbs7YW49pUuYMN9c+3ctlaCDEbloSFJWpx89TTuourkc+/de6Lx7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de63AP+EqH8m6u+W3yAx3z6772o7fGb417rhqurcVmqQ/YdyfIDBSU9fh3gppk05LZXUdS0WTr5biCpza0VGPPHHkoovde6+nx7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6//Q3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdJfeex9ldj7byezew9obX35tDNQGmzO1d57fxO6Nt5amP1p8ng85SV2Lr4D/AKiWJ1/w9+691Qh8q/8AhLx/J9+UByeUx/QOS+NO8cl5nO6/jDuifrmlgke7Rin62ylHurp6jgilJJWm29TuynTrAC6fde61uPk9/wAIlO9sA2Sy/wAPvmF1t2VQgy1FBsrvzaee6u3BBTpcpjot6bJHY2Cz+RkUWWabF4SnZzZvGo1+/de615/kj/IN/m7fFl8hUdifCDt/c238f5ZX3d0rj6HvjbbUEVycrUT9RV28Mjg8foGpmydNQyRLzIie/de6qPzGGzG3spXYTP4rJYPNYyoekyWIzFDVYzKY+qj/AM5TV1BWxQVdJUR39SSIrD8j37r3Tb7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917q+X+SD/I17s/m09v0udzFNn+tPhr1/noI+4+7vsxBLnJ6TwVlR1Z1M9fE9JnewsvSyoKipCT0O3aSYVdYJJXo6Ku917r64HSPSfVnxw6l2B0X0lsvDdedU9X7boNp7I2dgYGhx2Hw9AraQXleWqr8hXVMklTW1lRJLV11ZNLUVEkk8skje690Kfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r/0d/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdAF3d8U/jD8lsccV8iPjt0j3lQCnNNFD2z1bsnsBqWIhtP2E+6cJk6jHSxFtUckDxyRv6kYMAffuvdUnd9/8JWP5M3eL1tbiegd4dBZyv8hnzXQnau7tuojv+l6LaW9qnsDrvG+H+ylNhooz/aVvfuvdUx94/wDCIDr6serrfjZ88t5bcjTyGh213j1DhN6vPe/ijq98bC3PsBaTRwGdNvT6vqFX6e/de6qK7m/4R0fzZeumqqjrbJ/Gf5AUK62oafY3a2R2duGeNb6FrMf23tLYOBo6p7fpjytRGLi8n1t7r3VVvbv8iT+cF0ian++/8vf5G5COkLfcVPV+0Ye8qKNEvrmNd0nkOwaM06AEtIHMYXkm3Pv3Xuq3ewen+2upa7+F9q9Xdi9ZZPyGH+Hdg7J3Lsyu8yglovtNx4zG1HkUA3XTcW9+690HXv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917pQbU2lurfm5MLs3Y+2dwbz3fuTIU+J27tXamGyW4tyZ/K1b6KXGYXB4imrMplchUvxHDBFJI54APv3Xut07+UX/AMJFO3e367bXeX8zo5fpLqhJaLMYr4yYLJRQdz7+plZKqKn7KzmPlng6j23Wx6EnoaeSbc8kbSxOMPOiTH3Xuvoi9SdRdYdC9b7P6f6Y2HtjrLrDYOHgwGztj7OxNLhdvYHF05dxBR0NIiIZaiokeaonfXPVVEkk0zvLI7t7r3Qi+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6/9Lf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+690ybj/u3/BMh/e7+B/3c8B/iv8AeP7D+Cfb3F/4h/E/8h8Gq3+c9N/fuvdVFd+0X/CfzI1lRRfJl/5QkeYqXeKV+4a/4dYvcSzsDrMOQ3VU0mbpau1/XFIkg559+691Wd2L8HP+EgfZ3mkzW/v5YmAqZdTJU9dfzAtrdYfbyN/uyGg6/wDkVt3EHT+Ekp3i/wBp9+690Srev8lv/hJdury/wL+Y30z1r5L6P7lfzN/jhX+C97eL/SLlN/X0/jXr9+690UPev/CfP/hOrX+X/R1/Ps6p2re/g/vr8tvg1v8A8f1t5f4FlOtfNb828d/8PfuvdFZ3R/wnO/lXHyS7L/4Uq/ANfr4aDdGY+Ob3/wBT5MvivmdHb+htQn+v+Hv3Xui6bo/4T1fGOk8n9y/+FA38njP2v4f70fI/r7aGv/U+T+Fdhb38V/zbXb/H37r3QB53+QpFjtb4b+c3/Ib3DCA3jjj/AJimFxlc9r2DQV/XiUSFha3+Unn62HJ917oGc7/Jf31iNf8AD/5in8mzdGgEr/Av5nPx0p/IReyp/ebNbdsWtxq0jnm3v3Xugkyv8qbuvHF/tPkt/LHzum9jiv5qX8vyESWtYp/HPkLhiL3/ALWn6e/de6DfK/y5u/8AEa2n7G+B9VGtyJMV/NI/lm5bWoDG6Q475b1FTzpNgUDfTjkX917oP6/4Ydv40uKjePxPk0atX2Hz0+DOVB0toOg4z5FVgkufppvcci459+690j6740di47V9xuP4/wAmjyX+x+WXxXyl/ELtp/hvctXrv/Z031/2b+/de6SFd1BuzHlhPlurpNJsfse8OlcmL6dfpON7Aqwwt+RcX4+vHv3XukhW7XyVBfz1O3ZLaf8AgFu/aeS/Vci38OzVVe1uf6fn37r3SfClmCDTcsFBLKq3Jty7EIq3/JNh7917oUdodO7t3xNFBhcv1ZRPMVCNu/vPpLr2EFrW8tRv7sHbVPAOeS7KB+ffuvdWEdOfyj+zu0p6Ibq+Z/8AKm6DoKwof4n3B/M5+H1VHTQPa09VjOnuzu28/TkKbmJqMTD6MgPv3Xur2fip/wAJ9P5OWJqcbnfmp/Py+EW8ljaGav64+OPya+NWzscZYisjU8naXYXYu5cnksfVN6JFi2xjKgR30TIzBk917rcs/lhdKfyP+hKis2F/LG3P8Jd4djUmDMu6NwdO949Z9/d9ZHCEhKqr3Pvel3pvfsgYGoqVLtTfcQYqKRiIoIxZR7r3VzHv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r//2Q==";
        this.chart = echarts.init(this.$refs.ciyunWrap);
        this.chart.setOption({
          series: [{
              type: 'wordCloud',
              maskImage: maskImage,
              left: 'center',
              top: 'center',
              width: '90%',
              height: '100%',
              right: null,
              bottom: null,
              sizeRange: [12, 36],
              rotationRange: [-80, 80],
              rotationStep: 2,
              gridSize: 0,
              drawOutOfBound: false,
              layoutAnimation: true,
              textStyle: {
                  fontFamily: 'annual-report-font',
                  color: '#F09048'
              },
              data: this.info.userKeywordList || []
          }]
        });
    }
  },
  mounted() {
    this.swiper = document.getElementById("swiper").swiper;
    // this.swiper.activeIndex = 10;
  },
  watch: {
    cell() {
      if (this.cell) {
        this.failMsg = "";
      }
    },
    activeIndex() {
      this.renderCiyun();
    }
  },
};
</script>