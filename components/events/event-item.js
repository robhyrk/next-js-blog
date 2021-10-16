import Button from '../ui/button'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import RightArrow from '../icons/arrow-right-icon'
import classes from './event-item.module.css'

function EventItem ({id, title, image, date, location}) {

const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})
console.log(image)
const formattedAddress = location.replace(', ', '\n')
const exploreLink = `/events/${id}`

return (
    <li className={classes.item}>
        <img src={'/' + image} alt={title} />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <DateIcon/>
                    <time>{readableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon/>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>
                    <span>Explore Exent</span>
                    <span className={classes.icon}><RightArrow/></span>
                </Button>
            </div>
        </div>
    </li>
)}

export default EventItem