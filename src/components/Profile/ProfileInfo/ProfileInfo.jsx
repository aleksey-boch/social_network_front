import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.oboi}>
                <img src='https://fotooboi.org.ua/images/product_images/info_images/fotooboi-plyazh-i-palma-10312.jpg' />
            </div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    )
}


export default ProfileInfo;