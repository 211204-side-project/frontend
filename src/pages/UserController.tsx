import React, { useState } from 'react'
import {
  Setting,
  SettingHeader,
  SettingImg,
  SettingProfile,
  SettingNickname,
  SettingPassword,
  SettingUserInfo,
} from './styles/userController.style'

type VerifyConvention = {
  [key: string]: boolean
}

interface OnEditProfileModalProp {
  onEditProfileModal: () => void
}

const UserController: React.FC<OnEditProfileModalProp> = ({
  onEditProfileModal,
}) => {
  const [userProfileImg, setUserProfileImg] = useState<any>(null)
  const [file, setFile] = useState<any>('')
  const [verify, setVerify] = useState<VerifyConvention>({
    loginType: false,
    deletImg: false,
  })

  const [update, setUpdate] = useState<any>({
    nickname: null,
    password: '',
  })

  const insertImg = (e: any) => {}

  const deleteImg = () => {
    setUserProfileImg(null)
    setFile(null)
    setVerify({ ...verify, deletImg: true })
  }

  const handleInputValue = (key: any) => (e: any) => {
    setUpdate({ ...update, [key]: e.target.value })
  }

  const userInfoUpdate = () => {}

  return (
    <Setting>
      <SettingHeader>
        <h2>회원 정보 수정</h2>
      </SettingHeader>
      <SettingImg>
        <img className="profile" src="assets/images/default-profile.jpg"></img>
      </SettingImg>
      <SettingProfile>
        <label>
          프로필 사진 변경
          <input
            className="hide"
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            onChange={(e) => insertImg(e)}
          ></input>
        </label>
        <button className="settting-profile-del-btn" onClick={deleteImg}>
          프로필 사진 제거
        </button>
      </SettingProfile>
      <SettingNickname>
        <p>닉네임 : </p>
        <input
          onChange={handleInputValue('nickname')}
          value={update.nickname || ''}
        ></input>
      </SettingNickname>
      <SettingPassword className="settig-password">
        <p>비밀번호 : </p>
        <input onChange={handleInputValue('password')}></input>
      </SettingPassword>
      <SettingUserInfo>
        <button onClick={userInfoUpdate}>변경 완료</button>
        <button onClick={onEditProfileModal}>Close</button>
      </SettingUserInfo>
    </Setting>
  )
}

export default UserController
