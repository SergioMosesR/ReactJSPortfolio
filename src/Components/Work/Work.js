import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Ilkoom from '../../Assets/Ilkoom.png';
import ToDo from '../../Assets/ToDo.png';
import Expense from '../../Assets/Expense.png';
import './Work.css';

const Work = () => {

  const cardStyle = {
    maxWidth: 345,
    backgroundColor: 'rgb(40, 50, 50)', // Menentukan warna latar belakang
    color: 'white',
  };

  const textColor = {
    color: 'rgb(255, 255, 102)',
  }

  return (
    <section id='works'>
      <h1 className='Title'>My Portfolio</h1>
      <div className='Container'>
        <Card sx={cardStyle} className='Card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="290"
              image={Ilkoom}
              alt="She"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ilkoom Movie Database
              </Typography>
              <Typography variant="body2" sx={textColor}>
                Website yang Mengambil API dari Ilkoom Movie.
              </Typography>
            </CardContent>
          </CardActionArea>
          <a href='https://oeht4f.csb.app/' target='_blank'>
            <button>View Project</button>
          </a>
        </Card>
        <Card sx={cardStyle} className='Card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="290"
              image={ToDo}
              alt="She"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ToDo List
              </Typography>
              <Typography variant="body2" sx={textColor}>
                Sebuah website ToDo List Simple
              </Typography>
            </CardContent>
          </CardActionArea>
          <a href='https://w44r50.csb.app/' target='_blank'>
            <button>View Project</button>
          </a>
        </Card>
        <Card sx={cardStyle} className='Card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="290"
              image={Expense}
              alt="She"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Expense Tracker
              </Typography>
              <Typography variant="body2" sx={textColor}>
                Website untuk Pengeluaran dan Pemasukan
              </Typography>
            </CardContent>
          </CardActionArea>
          <a href='https://owhd80.csb.app/' target='_blank'>
            <button>View Project</button>
          </a>
        </Card>
        <h2 className='ComingSoon'>Coming Soon</h2>
      </div>

    </section>
  )
}

export default Work

