import React from 'react';

const intialState = {
    firstName:"",
    lastName: "",
    email: "",
    enterPrise: "",
    birthday: "",
    nameError: "",
    lnameError:"",
    emailError: "",
    enterPriseError: "",
    birthdayError: "",
}

class AddContact extends React.Component{
    state = intialState;

    validate =() =>{
       let nameError ="";
       let lnameError = "";
       let emailError = "";
       let enterPriseError ="";
       let birthdayError = "";


       if(!this.state.birthdayError){
        birthdayError = "Please fill up the blank!";
    }
    

       if(!this.state.enterPrise){
           enterPriseError = "Please fill up the blank!";
       }

       if(!this.state.lastName){
            lnameError ="Please fill up the blank!";
       }

        if(!this.state.firstName){
            nameError ="Please fill up the blank!";
        }

       if (!this.state.email.includes('@')){
        emailError = 'Invalid email';
       }
       if (emailError || nameError || lnameError || enterPriseError || birthdayError){
           this.setState({emailError, nameError, lnameError, enterPriseError, birthdayError})
           return false;
       }
       return true;
    };
    
    add = (e) =>{
        e.preventDefault();
        this.validate();
        if(this.state.firstName === "" || 
            this.state.lastName === "" || 
            this.state.email === "" || 
            this.state.enterPrise === "" || 
            this.state.birthday === ""){
            alert("All the fields are Empty!");
        }
        else{
            this.props.addContactHandler(this.state);
            // this.setState({ firstName: "", lastName: "", email: "", enterPrise: "", birthday: ""});
            this.setState(intialState);
           this.props.history.push("/");
        
        }
           
        

    }
    
    render () {
        const onLastChange = (e) =>{

            let res = /^[a-zA-Z ]+$/.test(e.target.value);

            if(res || e.target.value === ''){

                this.setState({

                    lastName: e.target.value

                })

            }

            else{

                alert('Numbers are not allowed!')
                return

            }

        }
        const onNameChange = (e) =>{

            let res = /^[a-zA-Z ]+$/.test(e.target.value);

            if(res || e.target.value === ''){

                this.setState({

                    firstName: e.target.value

                })

            }

            else{

                alert('Numbers are not allowed!')
                return

            }

        }

      const  onNumberChange = (e) =>{
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
               this.setState({enterPrise: e.target.value})
            }
            else{
                alert('Letters are not allowed!')
                return
            }
         }

        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" 
                        name="name" 
                        placeholder="First Name" 
                        size="30"
                        value={this.state.firstName}
                        // onChange={ (e) => this.setState({firstName: e.target.value})}
                        onChange={(onNameChange)}/>
                        <div style={{ color: "red"}}>{this.state.nameError}</div>
                    </div>
                    <div className="field">
                    <label>Last Name</label>
                        <input type="text" 
                        name="lastName" 
                        placeholder="Last Name"
                        value={this.state.lastName}
                        // onChange={ (e) => this.setState({lastName: e.target.value})} 
                        onChange={(onLastChange)}
                        />
                         <div style={{ color: "red"}}>{this.state.lnameError}</div>
                    </div>
                    <div className="field">
                    <label>Email</label>
                        <input type="email" 
                        name="email" 
                        size="30"
                        placeholder="Email" 
                        value={this.state.email}
                        onChange={ (e) => this.setState({email: e.target.value})}/>
                         <div style={{ color: "red"}}>{this.state.emailError}</div>
                    </div>
                    <div className="field">
                    <label>Enterprise ID</label>
                        <input type="text" 
                        name="enterprise" 
                        
                        placeholder="Enterprise ID"
                        value={this.state.enterPrise}
                        // onChange={ (e) => this.setState({enterPrise: e.target.value})} 
                        onChange={(onNumberChange)}
                        />
                        <div style={{ color: "red"}}>{this.state.enterPriseError}</div>
                    </div>
                    <div className="field">
                    <label>Birthday</label>
                        <input type="date" 
                        name="date" 
                       
                        // required="required"
                        placeholder="Birthday"
                        value={this.state.birthday}
                        onChange={ (e) => this.setState({birthday: e.target.value})} />
                    </div>
                    <div style={{ color: "red"}}>{this.state.birthdayError}</div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;