import { Flex, Container, Heading, Stack, Text, Button, Box , } from '@chakra-ui/react';
import './introduction.css';
// import homeLogo from './../../Assets/home-logo.png'
import homeLOGO from './../../Assets/18775.jpg'
import { Image } from '@chakra-ui/react'
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';
export default function Introduction() {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn)
    }

    const showTheme = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }


    return (
        <>
            <Helmet>
                <title>Resume Builder</title>
                <meta property="og:type" content="website" />
            </Helmet>

            <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
                <Stack
                    width={{ base: '95%', md: '47%' }}
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 1.5, md: 10, sm: '14' }}>

                    {
                        selectBtn
                            ?
                            <>
                                 <Heading>
                                    <div className="animate-gradient">
                                        <h2 className="animate-gradient-large-text">Resume</h2>
                                        <h2 className="animate-gradient">in Three Easy Steps</h2>
                                        </div>
                                </Heading>

                                <p class="line-1 anim-typewriter">Crafting Careers, building <span fontfamly>Resume</span>: Your Path to Professional Excellence Starts Here! </p>
                                                            
                                <Flex color={'grey.1200'} textAlign={'start'} flexDirection={'column'} w={'full'}>
                                    <Box className='Bullet_Points'>
                                        <Button>1</Button>
                                        <Text className='test'>
                                            <span>Select</span> Tempelate.
                                        </Text>
                                    </Box>
                                    <Box className='Bullet_Points'>
                                        <Button>2</Button>
                                        <Text className='test'>
                                            Use Simple <span>Resume Builder </span> !
                                        </Text>
                                    </Box>
                                    <Box className='Bullet_Points'>
                                        <Button float={'left'}>3</Button>
                                        <Text className='test'>
                                          <span>Print</span> Download & Use ☺️
                                        </Text>
                                    </Box>
                                </Flex>
                            </>
                            :
                            <Heading
                                m={'1.5'}
                                textAlign={{ base: 'center', md: 'start' }}
                                fontWeight={600}
                                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                lineHeight={'110%'}>
                                Select a {' '}
                                <Text as={'span'} color={'blue.600'}>
                                    Template {' '}
                                </Text>
                                from the list
                            </Heading>
                    }
                </Stack>

                {
                    selectBtn ?
                        <Stack>
                            <Image src={homeLOGO} alt='home logo' my={'4'} style={{ width: '600px' }} />
                            <Button
                                onClick={handleSelectTemplate}
                                className="button-82-pushable" role="button">
<span                             className="button-82-shadow"></span>
  <span                             className="button-82-edge"></span>
  <span                             className="button-82-front text">Select Template</span>
                                Select Template
                            </Button>
                        </Stack>
                        :
                        <>
                            <Box maxW={{ base: '100%', md: '61%' }} className="templatesList">
                                {
                                    ThemeTemplateData.map((item, index) => {
                                        return <div key={index} className="template" onClick={showTheme}>
                                            <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                                        </div>
                                    })
                                }
                            </Box>
                        </>
                }
            </Container>
            <Footer/>
        </>
    
    );
}
