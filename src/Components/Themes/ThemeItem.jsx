export default function ThemeItem({color, img, changeColor}) {
    return (
       <img src={img} className="theme-icon" onClick={() => changeColor(color)}/>
    )
}