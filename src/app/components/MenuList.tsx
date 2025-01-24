import React from 'react'
import MenuButton from './MenuButton'
import { MenuListProps } from '../types'

export default function MenuList({ menus, handleMenuClick }: MenuListProps) {
	return (
		<>
			{menus.map((menu) => (
				<MenuButton
					key={menu.link}
					caption={menu.caption}
					onClick={() => handleMenuClick(menu.link)}
				/>
			))}
		</>
	)
}
