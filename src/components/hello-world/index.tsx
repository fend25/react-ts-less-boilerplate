import React from 'react'
import style from './hello-world.less'

const HelloWorld = ({ title }: {title: string}) => (
  <div className={style.helloWorld}>{title}</div>
)

export default HelloWorld
