

function Login ({user}) {

if (user) {
    return(
        <div id="login-container">
            <h1>Login Page</h1>

            <div id="login-form">
                <form>
                    <label for="" ></label>
                    <input type="text" id="email" name="email" placeholder="Email"/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}
else {
    return(
        <div id="login-container">
            <h1>You're Logged In!</h1>

            <div id="new-show-container">
                <form id="new-show-form">
                    <label>Banner Image</label>
                    <input 
                        type="text" 
                        id="img" 
                        name="img"
                        placeholder="Image" />
                    <label>Venue</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title"
                        placeholder="Title" />
                    <label>Show Date</label>
                    <input 
                        type="date" 
                        id="date" 
                        name="date"
                        placeholder="Aug 18" />
                    <label>Show Time</label>
                    <input 
                        type="text" 
                        id="time" 
                        name="time"
                        placeholder="7:00 PM" />
                    <label>Address</label>
                    <input 
                        type="text" 
                        id="location" 
                        name="location"
                        placeholder="365 Fifth Ave" />
                    <label>Ticket Cost</label>
                    <input 
                        type="text" 
                        id="cost" 
                        name="cost"
                        placeholder="$25" />
                    <label>Host</label>
                    <input 
                        type="text" 
                        id="host" 
                        name="host"
                        placeholder="First Name Last Name" />
                    <label>Ticket URL</label>
                    <input 
                        type="text" 
                        id="url" 
                        name="url"
                        placeholder="URL" />
                    <label>Show Description</label>
                    <textarea    
                        id="desc" 
                        name="desc" />
                    <input 
                        className="button"
                        type="submit" 
                        value="Submit" />
                    <button className="button">Delete</button>
                </form>
            </div>
        </div>
    )
}

}

export default Login;

{/* <UpcomingShowCard 
isDesktop={isDesktop}
img={poster}
title="CUNY Graduate Theater"
date="Aug 18"
time="7:00PM"
location="365 Fifth Ave (B/W 34th & 35th Street)"
cost="$25"
host="Ken Dashow"
desc={testDesc}
url="https://bpt.me/5763465"/> */}