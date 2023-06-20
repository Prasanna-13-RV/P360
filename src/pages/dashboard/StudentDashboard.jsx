import React from 'react';
import ReactEcharts from 'echarts-for-react';

const data = {
	userId: 'solo1',
	fname: 'solo',
	lname: 'castiest',
	email: 'solotilldeath@gmail.com',
	gender: 'trans',
	address: 'Beech Creek, PA',
	paddress: 'Beech Creek, PA',
	contact: '99999',
	dob: '04/06/2003',
	schoolName10: 'School',
	schoolName12: 'School',
	schoolName10Mark: 123,
	schoolName12Mark: 456,
	fatherName: 'I',
	fatherPhone: '123456789',
	motherName: 'G',
	motherPhone: '987654321',
	passingYear: 2024,
	joiningYear: 2020,
	dept: 'IT',
	skills: ['sighting', 'frontend', 'single', 'fullstack'],
	marksId: 1,
	compId: 1
};

const marks = [
	{
		userId: 'solo1',
		marksId: 1,
		semester1: {
			maths: {
				subjectCode: 'asdfg',
				marks: 100
			},
			phy: {
				subjectCode: 'asdfg',
				marks: 100
			},
			che: {
				subjectCode: 'asdfg',
				marks: 100
			},
			eng: {
				subjectCode: 'asdfg',
				marks: 100
			},
			p360Score: 100,
			eg: {
				subjectCode: 'asdfg',
				marks: 100
			}
		},
		semester2: {
			maths: {
				subjectCode: 'asdfg',
				marks: 100
			},
			phy: {
				subjectCode: 'asdfg',
				marks: 100
			},
			che: {
				subjectCode: 'asdfg',
				marks: 100
			},
			eng: {
				subjectCode: 'asdfg',
				marks: 100
			},
			p360Score: 100,
			eg: {
				subjectCode: 'asdfg',
				marks: 100
			}
		},
		semester3: {
			maths: {
				subjectCode: 'asdfg',
				marks: 100
			},
			phy: {
				subjectCode: 'asdfg',
				marks: 100
			},
			che: {
				subjectCode: 'asdfg',
				marks: 100
			},
			eng: {
				subjectCode: 'asdfg',
				marks: 100
			},
			p360Score: 100,
			eg: {
				subjectCode: 'asdfg',
				marks: 100
			}
		},
		semester4: {
			maths: {
				subjectCode: 'asdfg',
				marks: 100
			},
			phy: {
				subjectCode: 'asdfg',
				marks: 100
			},
			che: {
				subjectCode: 'asdfg',
				marks: 100
			},
			eng: {
				subjectCode: 'asdfg',
				marks: 100
			},
			p360Score: 100,
			eg: {
				subjectCode: 'asdfg',
				marks: 100
			}
		},
		semester5: {
			maths: {
				subjectCode: 'asdfg',
				marks: 100
			},
			phy: {
				subjectCode: 'asdfg',
				marks: 100
			},
			che: {
				subjectCode: 'asdfg',
				marks: 100
			},
			eng: {
				subjectCode: 'asdfg',
				marks: 100
			},
			p360Score: 100,
			eg: {
				subjectCode: 'asdfg',
				marks: 100
			}
		},
		semester6: {
			maths: {
				subjectCode: 'asdfg',
				marks: 100
			},
			phy: {
				subjectCode: 'asdfg',
				marks: 100
			},
			che: {
				subjectCode: 'asdfg',
				marks: 100
			},
			eng: {
				subjectCode: 'asdfg',
				marks: 100
			},
			p360Score: 100,
			eg: {
				subjectCode: 'asdfg',
				marks: 100
			}
		},
		semester7: {
			maths: {
				subjectCode: 'asdfg',
				marks: 100
			},
			phy: {
				subjectCode: 'asdfg',
				marks: 100
			},
			che: {
				subjectCode: 'asdfg',
				marks: 100
			},
			eng: {
				subjectCode: 'asdfg',
				marks: 100
			},
			p360Score: 100,
			eg: {
				subjectCode: 'asdfg',
				marks: 100
			}
		},
		semester8: {
			maths: {
				subjectCode: 'asdfg',
				marks: 100
			},
			phy: {
				subjectCode: 'asdfg',
				marks: 100
			},
			che: {
				subjectCode: 'asdfg',
				marks: 100
			},
			eng: {
				subjectCode: 'asdfg',
				marks: 100
			},
			p360Score: 100,
			eg: {
				subjectCode: 'asdfg',
				marks: 100
			}
		}
	}
];

const compMarks = [
	{
		compId: 1,
		userId: 'solo1',
		p360Score: 100,
		leetCode: 100,
		codeChef: 100,
		codeForces: 100,
		hackerRank: 100,
		codeDivision: 100,
		hackerEarth: 100,
		interviewBit: 100,
		gfg: 100
	},
	{
		compId: 1,
		userId: 'solo1',
		p360Score: 100,
		leetCode: 100,
		codeChef: 100,
		codeForces: 100,
		hackerRank: 100,
		codeDivision: 100,
		hackerEarth: 100,
		interviewBit: 100,
		gfg: 100
	},
	{
		compId: 1,
		userId: 'solo1',
		p360Score: 100,
		leetCode: 100,
		codeChef: 100,
		codeForces: 100,
		hackerRank: 100,
		codeDivision: 100,
		hackerEarth: 100,
		interviewBit: 100,
		gfg: 100
	},
	{
		compId: 1,
		userId: 'solo1',
		p360Score: 100,
		leetCode: 100,
		codeChef: 100,
		codeForces: 100,
		hackerRank: 100,
		codeDivision: 100,
		hackerEarth: 100,
		interviewBit: 100,
		gfg: 100
	},
	{
		compId: 1,
		userId: 'solo1',
		p360Score: 100,
		leetCode: 100,
		codeChef: 100,
		codeForces: 100,
		hackerRank: 100,
		codeDivision: 100,
		hackerEarth: 100,
		interviewBit: 100,
		gfg: 100
	},
	{
		compId: 1,
		userId: 'solo1',
		p360Score: 100,
		leetCode: 100,
		codeChef: 100,
		codeForces: 100,
		hackerRank: 100,
		codeDivision: 100,
		hackerEarth: 100,
		interviewBit: 100,
		gfg: 100
	},
	{
		compId: 1,
		userId: 'solo1',
		p360Score: 100,
		leetCode: 100,
		codeChef: 100,
		codeForces: 100,
		hackerRank: 100,
		codeDivision: 100,
		hackerEarth: 100,
		interviewBit: 100,
		gfg: 100
	},
	{
		compId: 1,
		userId: 'solo1',
		p360Score: 100,
		leetCode: 100,
		codeChef: 100,
		codeForces: 100,
		hackerRank: 100,
		codeDivision: 100,
		hackerEarth: 100,
		interviewBit: 100,
		gfg: 100
	},
	{
		compId: 1,
		userId: 'solo1',
		p360Score: 100,
		leetCode: 100,
		codeChef: 100,
		codeForces: 100,
		hackerRank: 100,
		codeDivision: 100,
		hackerEarth: 100,
		interviewBit: 100,
		gfg: 100
	},
	{
		compId: 1,
		userId: 'solo1',
		p360Score: 100,
		leetCode: 100,
		codeChef: 100,
		codeForces: 100,
		hackerRank: 100,
		codeDivision: 100,
		hackerEarth: 100,
		interviewBit: 100,
		gfg: 100
	},
	{
		compId: 1,
		userId: 'solo1',
		p360Score: 100,
		leetCode: 100,
		codeChef: 100,
		codeForces: 100,
		hackerRank: 100,
		codeDivision: 100,
		hackerEarth: 100,
		interviewBit: 100,
		gfg: 100
	},
	{
		compId: 1,
		userId: 'solo1',
		p360Score: 100,
		leetCode: 100,
		codeChef: 100,
		codeForces: 100,
		hackerRank: 100,
		codeDivision: 100,
		hackerEarth: 100,
		interviewBit: 100,
		gfg: 100
	}
];
const StudentDashboard = () => {
	return (
		<div className='grid grid-cols-3 grid-rows-3 '>
			{/* <div className='flex items-center justify-center flex-col'>
				<h1>P360 Rank</h1>
				<ReactEcharts
					className='w-full'
					option={{
						xAxis: {
							type: 'category',
							data: ['61-70', '71-80', '81-90', '91-100']
						},
						yAxis: {
							type: 'value'
						},
						series: [
							{
								data: [
                                    marks.filter((m)=>m.semester1.p360Score>60&&m.semester1.p360Score===70).length
								,
                                marks.filter((m)=>m.semester1.p360Score>70&&m.semester1.p360Score===80).length,
                                marks.filter((m)=>m.semester1.p360Score>80&&m.semester1.p360Score===90).length,
                                marks.filter((m)=>m.semester1.p360Score>90&&m.semester1.p360Score===100).length,
								],
								type: 'bar'
							}
						]
					}}
				/>
			</div> */}
			<div className='flex items-center justify-center flex-col'>
				<h1>Trend chart</h1>
				<ReactEcharts
					className='w-full'
					option={{
						xAxis: {
							type: 'category',
							data: [
								'1',
								'2',
								'3',
								'4',
								'5',
								'6',
								'7',
								'8'
							],
                            
						},
						yAxis: {
							type: 'value'
						},
						series: [
							{
								data: [
									marks
										.map((m) => m.semester1.p360Score)
										.reduce((m, t) => m + t),
									marks
										.map((m) => m.semester2.p360Score)
										.reduce((m, t) => m + t),
									marks
										.map((m) => m.semester3.p360Score)
										.reduce((m, t) => m + t),
									marks
										.map((m) => m.semester4.p360Score)
										.reduce((m, t) => m + t),
									marks
										.map((m) => m.semester5.p360Score)
										.reduce((m, t) => m + t),
									marks
										.map((m) => m.semester6.p360Score)
										.reduce((m, t) => m + t),
									marks
										.map((m) => m.semester7.p360Score)
										.reduce((m, t) => m + t),
									marks
										.map((m) => m.semester8.p360Score)
										.reduce((m, t) => m + t)
								],
								type: 'bar'
							}
						]
					}}
				/>
			</div>
		</div>
	);
};

export default StudentDashboard;
