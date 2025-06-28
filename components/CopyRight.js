export default function CopyRight() {
    const year = new Date().getFullYear();

    return <div className='copyright_text'>© {year} CreatiVibe Labs. All rights reserved.</div>
}
