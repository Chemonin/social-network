import React from "react";
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={ s.content }>
      <div className={ s.container }>
        <div>
          <img src="https://images.unsplash.com/photo-1631539161681-5b947b1524d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" alt=""/>
        </div>
        <div>
          User data
        </div>
        <div>
          <h2>Posts</h2>
          <ul>
            <li className={ s.item }>Post 1</li>
            <li className={ s.item }>Post 2</li>
            <li className={ s.item }>Post 3</li>
            <li className={ s.item }>Post 4</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile