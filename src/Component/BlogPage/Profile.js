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
import { addUser, fetchAsyncUsers } from "../../redux/Users/userElseSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/Users/userSlice";

import axios from "axios";

export default function Profile(props) {
  const dispatch = useDispatch();
  const share = [
    { value: "option1", label: "Facebook", route: "/uploadblogs" },
    { value: "option2", label: "Whatsapp", route: "/uploadanswer" },
    { value: "option3", label: "Instagram", route: "/uploadcode" },
  ];
  const handleFollow = async () => {

   const response =  await axios
      .patch(
        `https://api.crackube.com/users/follow/${props.userId}`, {
            userId: window.localStorage.getItem("userId")
        }
      )
    console.log(response);
    dispatch(fetchAsyncUsers(window.localStorage.getItem("userId")));
  }

  const user = useSelector(getUser);
  return (
    <div className={styles.authorContainer} >
      <div className={styles.authorInside}>
        
        <div className= {styles.infocover} onClick={() => {window.location.href = `/profile/${props.userId}`}}>
        <div className={styles.image}>
          <a >
            <img className={styles.img} src={props.url} alt="" />
          </a>
        </div>
        <div className={styles.cover} >
          <div className={styles.title}>
            <a href="">{props.author}</a>
          </div>
          <div className={styles.modified} style={{ fontWeight: "100" }}>
            {props.modified}
          </div>
        </div>
        </div>
        <div className={styles.followbtn}>
          {user.following && user.following.includes(props.userId) ? (
            <button className={styles.unfollow} onClick={handleFollow}>Following</button>
          ) : (
            <button className={styles.follow} onClick={handleFollow}>Follow</button>
          )}
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
