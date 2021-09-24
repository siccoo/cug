import itexLogo from '../assets/img/itexlogo.svg'
export default function Header(){
    return(
        <>
        <div className="itex-navbar">
        <div className="itex-brand"><img src={itexLogo} loading="lazy" alt="" className="brand-img"/></div>
      </div>
        </>
    )
}