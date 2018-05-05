var botui = new BotUI('welcome');

botui.message.add({
  delay: 100,
  loading: true,
  content: 'Welcome to <a href="https://Deepertise.com">Deepertise!</a><br/>'
}).then(function () {
    botui.message.add({
      delay: 1000,
      human: true,
      loading: true,
      content: 'What is your vision?'
    }).then(function () {
    botui.message.add({
      delay: 1000,
      loading: true,
      content: 'We are building an intelligent interactive marketing platform,'
    }).then(function(){
      botui.message.add({
        delay: 1500,
        loading: true,
        content: 'which will enable users to have a delightful, instantaneous, one-on-one interaction with brands, using their preferred channel.'
      }).then(function () {
          botui.message.add({
            delay: 2000,
            human: true,
            loading: true,
            content: 'Who is behind Deepertise?'
    }).then(function(){
        botui.message.add({
          delay: 2000,
          loading: true,
          content: 'Deepertise\'s team includes PhDs from top universities in the US and is backed by top sillicon valley\'s investors.'
      }).then(function () {
          botui.message.add({
            delay: 2000,
            human: true,
            loading: true,
            content: 'Can I see a demo?'
          }).then(function(){
        botui.message.add({
          delay: 1500,
          loading: true,
          content: 'We are currently working in stealth mode!'
        }).then(function(){
        botui.message.add({
        delay: 1000,
        loading: true,
        content: '![product image](http://www3.pictures.zimbio.com/mp/0uw1h8cdJQLx.gif)'
      });
    });
      });
    });
  });
    });
    });
  });
});


// botui.message.add({
//   human: true,
//   content: 'Hello World from human!'
// }).then(function () {
//   botui.action.text({
//     action: {
//       button: {
//         icon: 'check',
//         label: 'Submit'
//       }
//     }
//   });
// });
