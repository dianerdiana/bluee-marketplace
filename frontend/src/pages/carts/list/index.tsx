import { Alert } from '@/components/Alert';
import { Button, ButtonLink } from '@/components/Button';
import { Card, CardBody, CardHeader, CardTitle } from '@/components/Card';
import { Col } from '@/components/Col';
import { Container } from '@/components/Container';
import { DynamicIcon } from '@/components/DynamicIcon';
import { ListItemHorizontal, ListMenu } from '@/components/List';
import { Row } from '@/components/Row';
import { formatCurrency } from '@/utils/utils';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type ButtonCounterProps = {
  defaultQuantity: number;
  onChange: CallableFunction;
};

const ButtonCounter: React.FC<ButtonCounterProps> = ({ defaultQuantity = 1, onChange }) => {
  const [quantity, setQuantity] = useState(defaultQuantity);

  const toggleIncreaseQuantity = () => setQuantity((prev) => ++prev);
  const toggleDecreaseQuantity = () => setQuantity((prev) => (prev === 1 ? 1 : --prev));

  useEffect(() => {
    onChange(quantity);
  }, [quantity, onChange]);

  return (
    <div className='flex items-center justify-center py-2 border rounded-2xl shrink-0 border-back'>
      <button onClick={toggleDecreaseQuantity} className='px-2 py-1 cursor-pointer' disabled={quantity === 1}>
        <DynamicIcon name='Minus' className={quantity === 1 ? 'text-secondary' : ''} />
      </button>
      <span className='text-lg font-bold leading-5 text-center w-14 border-x border-x-back'>{quantity}</span>
      <button onClick={toggleIncreaseQuantity} className='px-2 py-1 cursor-pointer'>
        <DynamicIcon name='Add' />
      </button>
    </div>
  );
};

const CartListPage = () => {
  return (
    <Container>
      <section className='pt-8 pb-12 lg:pb-24'>
        <h1 className='text-3xl font-bold mb-6'>My Shopping Cart</h1>

        <Row>
          <Col sm={12} lg={7}>
            <Card className='px-2 py-3 lg:p-5 mb-3 space-y-3'>
              <div className='flex items-center'>
                <div className='flex items-center justify-center me-1.5'>
                  <input type='checkbox' className='w-5 h-5 cursor-pointer' />
                </div>
                <div className='flex items-center'>
                  <DynamicIcon name='Shop' size={16} className='text-secondary me-1.5' />
                  <h2 className='text-secondary font-medium'>Bimore Gadget Universe</h2>
                </div>
              </div>

              <Card className='p-2 lg:p-5 border border-back'>
                <Row className='items-center gap-y-2'>
                  <Col sm={12} lg={8}>
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
                  <Col sm={12} lg={4}>
                    <ButtonCounter defaultQuantity={1} onChange={(value: number) => value} />
                  </Col>
                </Row>

                <hr className='w-full border border-back my-5' />

                <Row className='items-center'>
                  <Col>
                    <div className='flex items-center mb-2'>
                      <DynamicIcon name='ShoppingCart' size={20} className='text-secondary me-1.5' />
                      <span className='text-secondary font-medium'>Subtotal</span>
                    </div>
                    <p className='text-primary font-bold text-lg'>{formatCurrency(1852000)}</p>
                  </Col>
                  <Col>
                    <div className='flex justify-end'>
                      <Button variant='light-danger' className='flex items-center'>
                        <DynamicIcon name='Trash' size={20} className='me-1.5' />
                        <span className='font-medium'>Remove</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
              <Card className='p-2 lg:p-5 border border-back'>
                <Row className='items-center gap-y-2'>
                  <Col sm={12} lg={8}>
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
                  <Col sm={12} lg={4}>
                    <ButtonCounter defaultQuantity={1} onChange={(value: number) => value} />
                  </Col>
                </Row>

                <hr className='w-full border border-back my-5' />

                <Row className='items-center'>
                  <Col>
                    <div className='flex items-center mb-2'>
                      <DynamicIcon name='ShoppingCart' size={20} className='text-secondary me-1.5' />
                      <span className='text-secondary font-medium'>Subtotal</span>
                    </div>
                    <p className='text-primary font-bold text-lg'>{formatCurrency(1852000)}</p>
                  </Col>
                  <Col>
                    <div className='flex justify-end'>
                      <Button variant='light-danger' className='flex items-center'>
                        <DynamicIcon name='Trash' size={20} className='me-1.5' />
                        <span className='font-medium'>Remove</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Card>
          </Col>

          <Col sm={12} lg={5}>
            <Alert variant='success' className='p-5 mb-5'>
              <div className='flex items-center justify-between w-full relative'>
                <div className='flex items-center'>
                  <div className='bg-back/15 border-2 border-back/15 p-4 rounded-2xl w-fit'>
                    <DynamicIcon name='TicketDiscount' size={24} className='text-white' variant='Bulk' />
                  </div>
                  <div className='ms-2.5'>
                    <p className='text-white font-bold text-lg'>Apply Discount Coupon</p>
                    <p className='text-white font-medium opacity-75'>You Have 23 Avalaible Coupons</p>
                  </div>
                </div>

                <div className='flex items-center'>
                  <Link to={'/'} className='outline-none border-none bg-transparent z-40 cursor-pointer'>
                    <DynamicIcon name='ArrowCircleRight' size={32} className='text-white/75' />
                  </Link>
                </div>
              </div>
            </Alert>

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
                  <span className='me-1.5'>Continue to Checkout</span>
                  <DynamicIcon name='ArrowCircleRight2' />
                </ButtonLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default CartListPage;
