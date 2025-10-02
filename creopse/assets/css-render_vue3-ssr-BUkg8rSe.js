import { i as u, __tla as __tla_0 } from "./ckeditor_ckeditor5-vue-CmLqe3wy.js";
let l;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const { inject: i } = await u("vue"), o = "@css-render/vue3-ssr";
    function c(e, n) {
        return `<style cssr-id="${e}">
${n}
</style>`;
    }
    function d(e, n, t) {
        const { styles: r, ids: s } = t;
        s.has(e) || r !== null && (s.add(e), r.push(c(e, n)));
    }
    const a = typeof document < "u";
    l = function() {
        if (a) return;
        const e = i(o, null);
        if (e !== null) return {
            adapter: (n, t)=>d(n, t, e),
            context: e
        };
    };
});
export { l as u, __tla };
