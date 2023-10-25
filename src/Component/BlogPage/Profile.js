import styles from "./BlogAuthor.module.css";
import BlogOptions from "./BlogOptions";
import Like from "../../Assets/Heart.svg";
import Share from "../../Assets/Share.svg";
import Flag from "../../Assets/Flag.svg";
import Options from "../../Assets/Option.svg";
import Save from "../../Assets/BK_BLOG.svg";
import { FacebookIcon, WhatsappIcon } from "react-share";
import BlogShare from "./BlogShare";
import BlogLike from "./BlogLike";
import BlogSave from "./BlogSave";
export default function Profile(props) {
  const share = [
    { value: "option1", label: "Facebook", route: "/uploadblogs" },
    { value: "option2", label: "Whatsapp", route: "/uploadanswer" },
    { value: "option3", label: "Instagram", route: "/uploadcode" },
  ];
  return (
    <div className={styles.authorContainer}>
      <div className={styles.authorInside}>
        <div className= {styles.infocover}>
        <div className={styles.image}>
          <a href="">
            <img className={styles.img} src={props.authImg} alt="" />
          </a>
        </div>
        <div className={styles.cover}>
          <div className={styles.title}>
            <a href="">{props.author}</a>
          </div>
          <div className={styles.modified} style={{ fontWeight: "100" }}>
            {props.modified}
          </div>
        </div>
        </div>
        <div className={styles.followbtn}>
          <button className={styles.follow}>Follow</button>
        </div>
      </div>

      <div className={styles.blogopalign}>
        
        <div><BlogLike count={props.count} img={Like} note="Like" /></div>
        <div><BlogShare img={Share} note="Share" options={share} /></div>
        <div><BlogSave count = {props.saved} img={Save} note="Save" /></div>
        <div><BlogOptions img={Flag} note="Report" /></div>
        <div><BlogOptions img={Options} note="" /></div>
      </div>
    </div>
  );
}
