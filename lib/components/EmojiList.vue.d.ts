import { Vue } from "vue-property-decorator";
import { Emoji } from "@/models/Emoji";
export default class EmojiList extends Vue {
    data: any;
    emojisByRow: number;
    emojiWithBorder: boolean;
    emojiSize: number;
    filter: string;
    continuousList: boolean;
    category: string;
    hasSearch: boolean;
    width: number;
    height: number;
    searchByAlias(term: string, emoji: Emoji): boolean;
    calcScrollTop(): 88 | 44;
    scrollTo(top: number): void;
    getRelevantEmojis(category: string): any;
    get emojis(): any[];
    cellSizeAndPositionGetterList(item: any, index: number): {
        width: number;
        height: number;
        x: number;
        y: number;
    };
    get categories(): any;
    get containerEmoji(): any;
    onSelect(emoji: Emoji): Emoji;
    onDataChanged(): void;
    onCategoryChanged(newValue: any): void;
    mounted(): void;
}
//# sourceMappingURL=EmojiList.vue?rollup-plugin-vue=script.d.ts.map