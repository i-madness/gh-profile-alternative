export default class ApplicationUtils {

    static removeEmojiSigns(text: String): String {
        let emojis: Array<String> = text.match(/\:[a-z_]*\:/ig);
        emojis && emojis.forEach((emoji: any) => {
            text = text.replace(emoji, ``)
        })
        return text;
    }
    
}
