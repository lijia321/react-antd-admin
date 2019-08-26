import { Realtime } from 'leancloud-realtime';
import AV from 'leancloud-storage';
import { TypedMessagesPlugin } from 'leancloud-realtime-plugin-typed-messages';
import { GroupchatReceiptsPlugin } from 'leancloud-realtime-plugin-groupchat-receipts';
import { TypingIndicatorPlugin } from './typing-indicator';
import StickerMessage from './sticker-message';

const realtime = new Realtime({
    appId:'y7xBReL195sPfWIH6kiEnBsz-gzGzoHsz',
    appKey:'05U0OHEbc8CMe2hBt1MgWCEs',
    // server: 'rtm51',
    plugins: [TypedMessagesPlugin, GroupchatReceiptsPlugin, TypingIndicatorPlugin],
    region: 'cn' // 美国节点为 "us"
});
realtime.register([StickerMessage]);
export const LeanRT = {
    realtime:realtime,
    imClient:null,
    currentConversation:null
};
