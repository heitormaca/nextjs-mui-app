export type MobileDrawerMenuProps = {
  onClose: (value: boolean) => void
  open: boolean
  handleListItemClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: string
  ) => void
  selectedIndex: string
}
