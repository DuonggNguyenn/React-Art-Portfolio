import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="
        w-full 
        fixed bottom-0 left-0 py-1 xl:py-4 2xl:py-4
         bg-[#15110B] bg-gradient-to-b from-[#302617] to-[#0a0805]
        text-[#C6A664] text-center font-serif tracking-wide
        border-t border-[#C6A664]/40 
        text-[9px] sm:text-sm
        ">
            <p>&copy; {new Date().getFullYear()} | {t('footer.madeWith')}
                <span className="text-pink-300"> {t('footer.heart')}</span> {t('footer.by')} {t('footer.artist')}</p>
        </footer>
    );
}