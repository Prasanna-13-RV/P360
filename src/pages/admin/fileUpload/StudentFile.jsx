import React, { useState } from 'react';
import NavbarAdmin from '../../../components/admin/NavbarAdmin';
import FooterAdmin from '../../../components/admin/FooterAdmin';
import axios from 'axios';

function StudentFile() {
	const [fileStudent, setFileStudent] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(fileStudent);
	};

	const sendFileToBackend = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', fileStudent);
		console.log(formData, fileStudent);

		axios
			.post('/api/upload', formData)
			.then((response) => {
				// Handle the response from the backend
				console.log(response.data);
			})
			.catch((error) => {
				// Handle errors
				console.error(error);
			});
	};

	return (
		<>
			<NavbarAdmin />
			<section className='w-full h-screen flex flex-col justify-center items-center p-10'>
				<div>
					<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl pb-10'>
						Upload Student Excel File
					</h1>
				</div>
				<div className='flex items-center justify-center w-full'>
					<form
						className='flex flex-col items-center justify-center w-full'
						onSubmit={(e) => {
							sendFileToBackend(e);
						}}
					>
						<label
							htmlFor='dropzone-file'
							className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'
						>
							<div className='flex flex-col items-center justify-center pt-5 pb-6'>
								<svg
									aria-hidden='true'
									className='w-10 h-10 mb-3 text-gray-400'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
									></path>
								</svg>
								<p className='mb-2 text-sm text-gray-500'>
									<span className='font-semibold'>Click to upload</span> or drag
									and drop
								</p>
								<p className='text-xs text-gray-500'>.xlsx</p>
							</div>
							<input
								onChange={(e) => {
									setFileStudent(e.target.files[0]);
								}}
								id='dropzone-file'
								type='file'
								className='hidden'
							/>
						</label>
						<button
							type='submit'
							className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
						>
							Submit
						</button>
					</form>
				</div>
			</section>
			<FooterAdmin />
		</>
	);
}

export default StudentFile;
