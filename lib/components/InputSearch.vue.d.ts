import { Vue } from "vue-property-decorator";
export default class InputSearch extends Vue {
    focusOnOpen: boolean;
    $refs: {
        input: HTMLInputElement;
    };
    inputSearch: string;
    onInputChanged(newValue: any, old: any): void;
    get placeholder(): {
        search: string;
        categories: {
            Activity: string;
            Flags: string;
            Foods: string;
            Frequently: string;
            Objects: string;
            Nature: string;
            Peoples: string;
            Symbols: string;
            Places: string;
        };
    };
    mounted(): void;
}
//# sourceMappingURL=InputSearch.vue?rollup-plugin-vue=script.d.ts.map