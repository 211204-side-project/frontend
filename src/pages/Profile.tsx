import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { RootState } from '../redux/modules'
import { useSelector } from 'react-redux'
import UserController from './UserController'
import LogOut from '../modals/LogOut'

export const ProfileSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Profile = () => {
  const { me } = useSelector((state: RootState) => ({
    token: state.setIsLoggedInReducer.isLoggedIn,
    me: state.setUserReducer.me,
  }))

  const [editProfileModal, setEditProfileModal] = useState<boolean>(false)
  const [logOutModal, setLogOutModal] = useState<boolean>(false)

  const onEditProfileModal = () => setEditProfileModal(!editProfileModal)

  const onLogOutModal = () => setLogOutModal(!logOutModal)

  return (
    <>
      {editProfileModal ? (
        <UserController onEditProfileModal={onEditProfileModal} />
      ) : (
        <>
          {logOutModal ? (
            <LogOut onLogOutModal={onLogOutModal} />
          ) : (
            <ProfileSection>
              <div>
                <div>
                  {me.userImgUrl ?? (
                    <img
                      className="profile"
                      src="/assets/images/default-profile.jpg"
                    />
                  )}
                </div>
                <div>
                  <p>{me.nickname}</p>
                  <p>{me.phoneNumber}</p>
                </div>
                <div>
                  <button onClick={onEditProfileModal}>
                    <span>Edit</span>
                  </button>
                  <button onClick={onLogOutModal}>
                    <span>Log out</span>
                  </button>
                </div>
              </div>
            </ProfileSection>
          )}
        </>
      )}
    </>
  )
}

export default Profile
