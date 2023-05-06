class Title2 extends Comment{
    render(){
        return(
            <h2 className={this.props.className}>
            {this.props.children}

            </h2>
        )
    }
}
export default Title2