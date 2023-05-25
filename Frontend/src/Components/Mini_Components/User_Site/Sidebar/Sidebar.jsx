import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Radio, RadioGroup, Box, VStack, Stack
} from '@chakra-ui/react'
import { useState } from 'react'
export const Sidebar = () => {
    const [value, setValue] = useState("")
    console.log(value);
    return (
        <>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Category
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <RadioGroup onChange={setValue} value={value}>
                            <Stack direction={'column'}>
                                <Radio value='1'>First</Radio>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio>
                            </Stack>
                        </RadioGroup>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Product Type
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <RadioGroup onChange={setValue} value={value}>
                            <Stack direction={'column'}>
                                <Radio value='Blush'>Blush</Radio>
                                <Radio value='Bronzer'>Bronzer</Radio>
                                <Radio value='Eyebrow'>Eyebrow</Radio>
                                <Radio value='Eyeliner'>Eyeliner</Radio>
                                <Radio value='Eyeshadow'>Eyeshadow</Radio>
                                <Radio value='Foundation'>Foundation</Radio>
                                <Radio value='Lip liner'>Lip liner</Radio>
                                <Radio value='Lipstick'>Lipstick</Radio>
                                <Radio value='Mascara'>Mascara</Radio>
                                <Radio value='Nail polish'>Nail polish</Radio>
                            </Stack>
                        </RadioGroup>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Tags
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <RadioGroup onChange={setValue} value={value}>
                            <Stack direction={'column'}>
                                <Radio value='Canadian'>Canadian</Radio>
                                <Radio value='CertClean'>CertClean</Radio>
                                <Radio value='Chemical Free'>
                                    Chemical Free
                                </Radio>
                                <Radio value='Dairy Free'>Dairy Free</Radio>
                                <Radio value='EWG Verified'>EWG Verified</Radio>
                                <Radio value='EcoCert'>EcoCert</Radio>
                                <Radio value='Fair Trade'>Fair Trade</Radio>
                                <Radio value='Gluten Free'>Gluten Free</Radio>
                                <Radio value='Hypoallergenic'>Hypoallergenic</Radio>
                                <Radio value='Natural'>Natural</Radio>
                                <Radio value='No Talc'>No Talc</Radio>
                                <Radio value='Non-GMO'>Non-GMO</Radio>
                                <Radio value='Organic'>Organic</Radio>
                                <Radio value='Peanut Free Product'>Peanut Free Product</Radio>
                                <Radio value='Sugar Free'>Sugar Free</Radio>
                                <Radio value='USDA Organic'>USDA Organic</Radio>
                                <Radio value='Vegan'>Vegan</Radio>
                                <Radio value='alcohol free'>alcohol free</Radio>
                                <Radio value='cruelty free'>cruelty free</Radio>
                                <Radio value='oil free'>oil free</Radio>
                                <Radio value='purpicks'>purpicks</Radio>
                                <Radio value='silicone free'>silicone free</Radio>
                                <Radio value='water free'>water free</Radio>

                            </Stack>
                        </RadioGroup>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Brand
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <RadioGroup onChange={setValue} value={value}>
                            <Stack direction={'column'}>
                                <Radio value='almay'>almay</Radio>
                                <Radio value='alva'>alva</Radio>
                                <Radio value='anna sui'>anna sui</Radio>
                                <Radio value='annabelle'>annabelle</Radio>
                                <Radio value='benefit'>benefit</Radio>
                                <Radio value='boosh'>boosh</Radio>
                                <Radio value="burt's bees">burt's bees</Radio>
                                <Radio value='butter london'>butter london</Radio>
                                <Radio value="c'est moi">c'est moi</Radio>
                                <Radio value='cargo cosmetics'>cargo cosmetics</Radio>
                                <Radio value='china glaze'>china glaze</Radio>
                                <Radio value='clinique'>clinique</Radio>
                                <Radio value='colourpop'>colourpop</Radio>
                                <Radio value='covergirl'>covergirl</Radio>
                                <Radio value='dalish'>dalish</Radio>
                                <Radio value='deciem'>deciem</Radio>
                                <Radio value='dior'>dior</Radio>
                                <Radio value='dr. hauschka'>dr. hauschka</Radio>
                                <Radio value='e.l.f'>e.l.f</Radio>
                                <Radio value='essie'>essie</Radio>
                                <Radio value='fenty'>fenty</Radio>
                                <Radio value='glossier'>glossier</Radio>
                                <Radio value='green people'>green people</Radio>
                                <Radio value='iman'>iman</Radio>
                                <Radio value="l'oreal">l'oreal</Radio>
                                <Radio value='lotus cosmetics usa'>lotus cosmetics usa</Radio>
                                <Radio value="maia's mineral galaxy">maia's mineral galaxy</Radio>
                                <Radio value='marcelle'>marcelle</Radio>
                                <Radio value='marienatie'>marienatie</Radio>
                                <Radio value='maybelline'>maybelline</Radio>
                                <Radio value='milani'>milani</Radio>
                                <Radio value='mineral fusion'>mineral fusion</Radio>
                                <Radio value='misa'>misa</Radio>
                                <Radio value='mistura'>mistura</Radio>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio><Radio value='1'>First</Radio>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio><Radio value='1'>First</Radio>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio><Radio value='1'>First</Radio>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio><Radio value='1'>First</Radio>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio><Radio value='1'>First</Radio>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio><Radio value='1'>First</Radio>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio><Radio value='1'>First</Radio>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio><Radio value='1'>First</Radio>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio><Radio value='1'>First</Radio>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio>
                            </Stack>
                        </RadioGroup>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}

