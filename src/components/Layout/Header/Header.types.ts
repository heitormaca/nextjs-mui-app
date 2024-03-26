export type HeaderProps = {
  handleListItemClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: string
  ) => void
  selectedIndex: string
}
