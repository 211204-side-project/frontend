import styled from 'styled-components'

export const Setting = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
`

export const SettingHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`
export const SettingImg = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 70%;
  overflow: hidden;
  border: 1px solid $color-button;
  .profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 10;
  }
`
export const SettingProfile = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  button {
    background-color: #d3a4f9;
    color: white;
    border-radius: 2rem;
    padding: 10px 30px;
    font-size: 14px;
    margin: 1.5rem;
    margin-top: 1.5rem;
    border: none;
  }
  button:hover {
    color: $color-button;
    font-weight: 700;
    cursor: pointer;
  }
  label {
    background-color: #d3a4f9;
    color: white;
    border-radius: 2rem;
    padding: 10px 30px;
    font-size: 14px;
    margin: 1.5rem;
    margin-top: 1.5rem;
    border: none;
  }
  label:hover {
    color: $color-button;
    font-weight: 700;
    cursor: pointer;
  }
  .hide {
    display: none;
  }
`
export const SettingNickname = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SettingPassword = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SettingUserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    font-family: 'IBMPlexSansKR-Regular';
    background-color: #d3a4f9;
    color: white;
    border-radius: 2rem;
    padding: 10px 30px;
    font-size: 14px;
    margin: 1.5rem;
    margin-top: 1.5rem;
    border: none;
  }
  button:hover {
    color: $color-button;
    font-weight: 700;
    cursor: pointer;
  }
`
