import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserItem = props => {
	const { login, avatar_url } = props.user

	return (
		<div className='card shadow-md card-compact card-side bg-base-100'>
			<div className='flex-row items-center space-x-4 card-body'>
				<div>
					<div className='avatar'>
						<div className='rouded-full shadow w-14 h-14'>
							<img src={avatar_url} alt='Profile' />
						</div>
					</div>
				</div>
				<div>
					<h2 className='card-title'>{login}</h2>
					<Link
						className='text-base-content text-opacity-40'
						to={`/users/${login}`}
					>
						Visit Profile
					</Link>
				</div>
			</div>
		</div>
	)
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired
}

export default UserItem
