import React from 'react'
import style from './hello-world.less'

const HelloWorld = ({ title }: {title: string}) => (
  <div className={style.helloWorld}>
    {title}.&nbsp;
    <span className={style.customFont}>With custom fonts.</span>&nbsp;
    And images <img src="/images/favicon.png" width={24}/>
  </div>
)

export default HelloWorld
