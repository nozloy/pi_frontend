export interface MenuButtonProps {
	caption: string
	onClick: () => void
}
export interface MenuListProps {
	menus: { link: string; caption: string }[]
	handleMenuClick: (link: string) => void
}
