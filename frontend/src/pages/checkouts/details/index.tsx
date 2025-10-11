import { Alert } from '@/components/Alert';
import { Badge } from '@/components/Badge';
import { Button, ButtonLink } from '@/components/Button';
import { Card, CardBody, CardHeader, CardTitle } from '@/components/Card';
import { Col } from '@/components/Col';
import { Container } from '@/components/Container';
import { DynamicIcon } from '@/components/DynamicIcon';
import { InputIcon, TextareaIcon } from '@/components/Input';
import { Label } from '@/components/Label';
import { ListItemHorizontal, ListMenu } from '@/components/List';
import { Modal, ModalBody, ModalHeader, ModalTitle } from '@/components/Modal';
import { Row } from '@/components/Row';
import { formatCurrency } from '@/utils/utils';
import { useState } from 'react';

const CheckoutDetailPage = () => {
  const [showModalCourier, setShowModalCourier] = useState(false);
  const [selectedCourier, setSelectedCourier] = useState<string | null>(null);

  const toggleModalCourier = () => setShowModalCourier((prevState) => !prevState);
  const handleChangeCourier = (courier: string) => setSelectedCourier(courier);

  console.log(selectedCourier);

  return (
    <Container>
      <section className='pt-8 pb-12 lg:pb-24'>
        <h1 className='text-3xl mb-6 font-bold'>Checkout Page</h1>

        <Row className='gap-y-5'>
          <Col sm={12} lg={7}>
            <Card>
              <CardHeader className='flex-col'>
                <CardTitle>Your Cart</CardTitle>
                <div className='flex'>
                  <DynamicIcon name='Shop' />
                  <span>Bimore Gadget Universe</span>
                </div>
              </CardHeader>
              <CardBody>
                <Card className='p-2 lg:p-5 border border-back'>
                  <Row className='items-center gap-y-2'>
                    <Col sm={12} lg={7}>
                      <div className='flex items-center'>
                        <div className='overflow-hidden w-20 h-20 rounded-xl p-2.5 bg-back'>
                          <img
                            src='https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-2.png'
                            alt='Product Image'
                            className='object-contain h-full w-full'
                          />
                        </div>
                        <div className='ms-3'>
                          <h3 className='font-bold text-lg'>Macbook Pro M3</h3>
                          <p className='flex items-center text-primary font-bold'>
                            <span>Gadget</span>
                            <span className='w-2 h-2 bg-secondary rounded-full mx-2' />{' '}
                            <span className='font-semibold text-secondary'>3 KG</span>
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={12} lg={5}>
                      <div className='flex flex-col justify-center'>
                        <p className='font-bold text-primary text-end'>{formatCurrency(18620000)}</p>
                        <p className='text-end text-secondary font-semibold'>(5x)</p>
                      </div>
                    </Col>
                  </Row>

                  <hr className='w-full border border-back my-5' />

                  <Row className='items-center'>
                    <Col>
                      <div className='flex items-center mb-2'>
                        <DynamicIcon name='ShoppingCart' size={20} className='text-secondary me-1.5' />
                        <span className='text-secondary font-medium'>Subtotal</span>
                      </div>
                    </Col>
                    <Col>
                      <p className='text-primary font-bold text-lg text-end'>{formatCurrency(1852000)}</p>
                    </Col>
                  </Row>
                </Card>
              </CardBody>
            </Card>
          </Col>

          <Col sm={12} lg={5} className='space-y-5'>
            <Alert className='flex items-center' variant='primary'>
              <DynamicIcon name='ShieldTick' className='text-white' variant='Bold' />{' '}
              <p className='text-white font-bold text-lg'>Your personal data is securely protected by us</p>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>Contact & Delivery Address</CardTitle>
              </CardHeader>
              <CardBody>
                <form>
                  <Row className='gap-y-5'>
                    <Col sm={12}>
                      <div>
                        <Label htmlFor='addressSearching'>Address Searching</Label>
                        <InputIcon id='addressSearching' icon='GlobalSearch' placeholder='Enter District' />
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div>
                        <Label htmlFor='address'>Your Address</Label>
                        <TextareaIcon
                          autoComplete='address'
                          id='address'
                          icon='Location'
                          placeholder='Enter Your Address'
                          rows={4}
                        />
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div>
                        <Label htmlFor='city'>Your City</Label>
                        <InputIcon id='city' icon='Building' placeholder='Enter Your City' />
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div>
                        <Label htmlFor='postCode'>Post Code</Label>
                        <InputIcon id='postCode' icon='Keyboard' placeholder='Enter Post Code' />
                      </div>
                    </Col>
                  </Row>
                </form>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select Courier</CardTitle>
              </CardHeader>
              <CardBody>
                <Card className='border border-back p-2 lg:p-5'>
                  <Row className='items-center justify-between gap-y-2'>
                    <Col>
                      <div className='flex items-center'>
                        <Badge variant='light-secondary' className='rounded-full px-3 py-3'>
                          <DynamicIcon name='Truck' />
                        </Badge>

                        <div className='ms-3'>
                          <p className='font-bold text-base lg:text-lg'>
                            {selectedCourier ? 'J&T Express' : 'No Courier Selected'}
                          </p>
                          <p className='text-secondary text-sm lg:text-base font-semibold'>
                            {selectedCourier ? `EZ (${formatCurrency(7000)})` : 'Calculate to select courier'}
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <button
                        onClick={toggleModalCourier}
                        className='text-primary outline-none border-none cursor-pointer flex items-center'
                      >
                        <span>Calculate Delivery</span>
                        <DynamicIcon name='ArrowRight2' size={16} />
                      </button>
                    </Col>
                  </Row>
                </Card>
              </CardBody>
            </Card>

            <Card>
              <CardHeader className='p-2 lg:p-5'>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardBody className='p-2 lg:p-5'>
                <ListMenu className='mb-4'>
                  <ListItemHorizontal icon='ShoppingCart' label='Total Items:' value='2 Items' line={true} />
                  <ListItemHorizontal icon='Box' label='Total Quantity:' value='10x' line={true} />
                  <ListItemHorizontal icon='Ticket' label='Sub Total:' value={formatCurrency(42000)} line={true} />
                  <ListItemHorizontal icon='Receipt2' label='PPN 11%' value={formatCurrency(11000)} line={true} />
                  <ListItemHorizontal icon='DiscountShape' label='Discount' value={formatCurrency(0)} line={true} />
                  <ListItemHorizontal
                    icon='Money'
                    label='Grand Total'
                    value={formatCurrency(50120)}
                    valueClassName='text-primary'
                    line={true}
                  />
                </ListMenu>

                <ButtonLink
                  href='/checkouts/3121/details'
                  variant='primary'
                  className='flex items-center rounded-2xl w-full justify-center py-4'
                >
                  <span className='me-1.5'>Pay With Midtrans</span>
                  <DynamicIcon name='ArrowCircleRight2' />
                </ButtonLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </section>

      <Modal isOpen={showModalCourier} onClose={toggleModalCourier}>
        <ModalHeader onClose={toggleModalCourier}>
          <ModalTitle>Select Courier</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <section>
            <h2 className='text-secondary font-semibold mb-3'>Available Courier</h2>

            <form className='space-y-3'>
              <Card className='p-2 lg:p-4 border border-back'>
                <Row className='items-center justify-between'>
                  <Col className='grow-0'>
                    <label htmlFor='courier1' className='cursor-pointer'>
                      <div className='flex items-center'>
                        <Badge variant='light-secondary' className='rounded-full px-3 py-3'>
                          <DynamicIcon name='Truck' />
                        </Badge>

                        <div className='ms-3'>
                          <p className='font-bold text-lg'>J&T Express</p>
                          <p className='text-secondary font-semibold'>EZ ({formatCurrency(7000)})</p>
                        </div>
                      </div>
                    </label>
                  </Col>
                  <Col>
                    <div className='flex justify-end w-full'>
                      <input
                        id='courier1'
                        type='radio'
                        name='selectedCourier'
                        value={'J&T Express'}
                        className='w-5 h-5 cursor-pointer'
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleChangeCourier(e.target.value);
                          }
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Card>

              <Card className='p-2 lg:p-4 border border-back'>
                <Row className='items-center justify-between'>
                  <Col className='grow-0'>
                    <label htmlFor='courier2' className='cursor-pointer'>
                      <div className='flex items-center'>
                        <Badge variant='light-secondary' className='rounded-full px-3 py-3'>
                          <DynamicIcon name='Truck' />
                        </Badge>

                        <div className='ms-3'>
                          <p className='font-bold text-lg'>J&T Express</p>
                          <p className='text-secondary font-semibold'>EZ ({formatCurrency(7000)})</p>
                        </div>
                      </div>
                    </label>
                  </Col>
                  <Col>
                    <div className='flex justify-end w-full'>
                      <input
                        id='courier2'
                        type='radio'
                        name='selectedCourier'
                        value={'J&T Express'}
                        className='w-5 h-5 cursor-pointer'
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleChangeCourier(e.target.value);
                          }
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Card>

              <div className='w-full'>
                <Button className='w-full rounded-xl py-3' onClick={toggleModalCourier}>
                  Choose Courier
                </Button>
              </div>
            </form>
          </section>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default CheckoutDetailPage;
