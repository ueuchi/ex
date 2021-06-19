// import React, { useState } from 'react'
// import { unstable_batchedUpdates } from 'react-dom'
// import firebase from '../config/firebase'

// const SignUp = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [name, setName] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//             .then(({ user }) => {
//                 user.updateProfile({
//                     displayName: name
//                 })
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     return (
//         <div>
//             <h1>アカウント新規作成画面</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor='email'>E-mail</label>
//                     <input
//                         name='email' 
//                         type='email' 
//                         id='email' 
//                         placeholder='Email' 
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor='password'>Password</label>
//                     <input 
//                         name='password' 
//                         type='password' 
//                         id='password' 
//                         placeholder='Password' 
//                     />
//                 </div>
//                 <button type='submit'>作成</button>

//             </form>
//         </div>
//     )
// }



import React, { useState, useCallback } from "react";
import firebase from "../config/firebase";
import styled from "styled-components";
import Logo from "../img/logo.png";
import iconDefault from "../img/icon_default.png";
import iconMask from "../img/icon-mask.png";
import Button from "@material-ui/core/Button";
import { ModalCropper } from "./ModalCropper";
import getCroppedImg from "../cropImage";

export const SignUp = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [src, setSrc] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [selectImageValue, setSelectImageValue] = useState("");
  const [croppedImageUrl, setCroppedImageUrl] = useState(iconDefault);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  //画像選択
  const onChangeFile = (e) => {
    setSrc(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0]);
  };

  //新規登録ボタンクリック
  const handleSubmit = (e) => {
    e.preventDefault();
    const iconRef = firebase
      .storage()
      .ref()
      .child("user-image/" + email + "_icon.jpg");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user
          .sendEmailVerification()
          .then(() => {
            window.alert(`${email}に確認メールを送信しました`);
            iconRef
              .put(croppedImage)
              .then(() => {
                iconRef
                  .getDownloadURL()
                  .then((url) => {
                    user
                      .updateProfile({
                        displayName: name,
                        photoURL: url,
                      })
                      .then(() => {
                        history.push("/");
                      })
                      .catch((err) => {
                        console.log(err);
                        window.alert("プロフィールの作成に失敗しました");
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                    window.alert("アイコン画像の取得に失敗しました");
                  });
              })
              .catch((err) => {
                console.log(err);
                window.alert("画像をアップロード出来ませんでした");
              });
          })
          .catch((err) => {
            console.log(err);
            window.alert(`${email}に確認メールを送信できませんでした`);
          });
      })
      .catch((err) => {
        console.log(err);
        window.alert("アカウントの作成に失敗しました");
      });
  };

  //ModalCropperの処理
  const onClickClose = () => {
    setSrc(null);
    setSelectImageValue("");
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(src, croppedAreaPixels);
      console.log("donee", { croppedImage });
      setCroppedImageUrl(croppedImage);
      let blobImage = await fetch(croppedImage).then((r) => r.blob());
      setCroppedImage(blobImage);
      setSrc(null);
      setSelectImageValue("");
    } catch (e) {
      console.error(e);
    }
  }, [src, croppedAreaPixels]);
  //ここまでModalCropperの処理

  return (
    <>
      <Header>
        <h1>
          <span>
            <img src={Logo} alt="logo" />
          </span>
          -Bond
        </h1>
      </Header>
      <SignUpFormWrap>
        <h2>新規登録</h2>
        <SignUpForm>
          <form onSubmit={handleSubmit}>
            <div className="input-image-wrap">
              <IconUp>
                <span>
                  <img src={croppedImageUrl} alt="デフォルトアイコン" />
                </span>
                <input
                  type="file"
                  value={selectImageValue}
                  name="avatar"
                  id="avatar"
                  onChange={onChangeFile}
                />
              </IconUp>
            </div>
            {src && (
              <ModalCropper
                src={src}
                onClickClose={onClickClose}
                onCropComplete={onCropComplete}
                showCroppedImage={showCroppedImage}
              />
            )}
            <div className="input-wrap">
              <input
                type="name"
                name="name"
                id="name"
                value={name}
                placeholder="ユーザー名"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-wrap">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="メールアドレス"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrap">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="パスワード"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="signup" variant="contained" type="submit">
              新規登録
            </Button>
          </form>
        </SignUpForm>
      </SignUpFormWrap>
    </>
  );
};

  export default SignUp