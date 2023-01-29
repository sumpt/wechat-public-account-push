/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb79ae4b8e6113874',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '714a177b124d2b106293cce2321feb38',

  PROVINCE: '江西',
  CITY: '景德镇',

  USERS: [
    {
      // 想要发送的人的名字
      name: '萱萱小宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '714a177b124d2b106293cce2321feb38',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '亲爱的，早上好！',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-16',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2000', date: '05-05',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '萱萱', year: '2000', date: '06-16',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '05-04',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-05-19' },
        // 初吻
        { keyword: 'firstkiss_day', date: '2021-05-29' },
        // 求婚
        { keyword: 'propose_day', date: '2021-12-12' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '推送成功',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6ik_5rQqb6smi221NKYd4uW42o4',
    }
  ],

}

module.exports = USER_CONFIG

