const BackTop = () => {
	return (
		<div id='back-top' style={{ display: "block", backgroundColor: "#cc8e35" }}>
			<a className='wrapper' title='Go to Top' href='#'>
				<div className='arrows-container'>
					<div className='arrow arrow-one' />
					<div className='arrow arrow-two' />
				</div>
			</a>
		</div>
	);
};

export default BackTop;
