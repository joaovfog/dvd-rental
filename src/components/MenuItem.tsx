import { Link } from 'react-router-dom'

interface MenuItemProps {
  icon: React.ReactNode
  name?: string
  to: string
  tip?: string
}

export const MenuItem = (props: MenuItemProps) => {
  const { icon, name, to } = props

  return (
    <Link
      style={{
        textDecoration: 'none',
        justifyItems: 'center',
        cursor: 'pointer',
        color: '#262626',
        marginTop: 20,
        marginLeft: 15
      }}
      to={to}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        {icon}
        <div
          className="menu-text"
          style={{
            paddingLeft: 12,
            fontWeight: 500,
            color: '#595959'
          }}
        >
          {name}
        </div>
      </div>
    </Link>
  )
}
