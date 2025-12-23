import { languages } from "./languages"

export default function LanguageChips({wrongGuessCount}){

    const span = languages.map((lang, index) => {
        const className = wrongGuessCount > 0 && index + 1  <= wrongGuessCount ? "chip lost" : "chip"  
        const style = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }

    return(
        <span 
            className={className}
            key={lang.name}
            style={style}>
                {lang.name}
        </span>
    )
    })
    return(
        <section className="languages">{span}
        </section>
    )
}
