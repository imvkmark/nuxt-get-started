import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

/* 扩展自定义的颜色值
 * https://tailwindcss.com/docs/customizing-colors
 * ---------------------------------------- */



export default <Partial<Config>>{
    /*
     * 深色模式
     * https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
     * ---------------------------------------- */
    darkMode: 'selector',
    content: [],

    /*
     * Tailwind CSS Color Generator
     * https://uicolors.app/create
     * ---------------------------------------- */
    theme: {
        extend: {
            colors: {
                primary: colors.green
            }
        }
    },

    plugins: [],
}
