// React
import { useState } from 'react';

// Custom Components
import { Alert } from '@/components/Alert';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Card, CardBody, CardHeader, CardTitle } from '@/components/Card';
import { Col } from '@/components/Col';
import { Container } from '@/components/Container';
import { DynamicIcon } from '@/components/DynamicIcon';
import { InputIconTextarea, InputMessage, InputRating } from '@/components/Input';
import { Label } from '@/components/Label';
import { ListMenu, ListHeader, ListItem, ListItemHorizontal } from '@/components/List';
import { Modal, ModalBody, ModalHeader, ModalTitle } from '@/components/Modal';
import { ProgressSteps } from '@/components/ProgressSteps';
import { Row } from '@/components/Row';

// Schemas
import { testimonySchema, type TestimonySchema } from '@/schemas/testimony.schema';

// Types
import { DeliveryStatusEnum, type DeliveryStatusType } from '@/types/deliveryStatus';
import type { IconName } from '@/types/iconNames';

// Utils
import type { alertVariants } from '@/utils/constants/alertVariants';
import { badgevariants } from '@/utils/constants/badgeVariants';
import { formatCurrency } from '@/utils/utils';

// Thirdparty
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

const steps = [
  { number: 1, label: 'Book Review', value: DeliveryStatusEnum.PENDING },
  { number: 2, label: 'Processing', value: DeliveryStatusEnum.PROCESSING },
  { number: 3, label: 'Delivering', value: DeliveryStatusEnum.DELIVERING },
  { number: 4, label: 'Completed', value: DeliveryStatusEnum.COMPLETED },
];

const badgeColors: Record<DeliveryStatusType, keyof typeof badgevariants> = {
  [DeliveryStatusEnum.PROCESSING]: 'light-primary',
  [DeliveryStatusEnum.DELIVERING]: 'light-warning',
  [DeliveryStatusEnum.PENDING]: 'yellow',
  [DeliveryStatusEnum.COMPLETED]: 'light-success',
  [DeliveryStatusEnum.CANCELED]: 'light-danger',
};

const alertColors: Record<DeliveryStatusType, keyof typeof alertVariants> = {
  [DeliveryStatusEnum.PENDING]: 'yellow',
  [DeliveryStatusEnum.PROCESSING]: 'primary',
  [DeliveryStatusEnum.DELIVERING]: 'warning',
  [DeliveryStatusEnum.COMPLETED]: 'success',
  [DeliveryStatusEnum.CANCELED]: 'danger',
};

const alertMessages: Record<DeliveryStatusType, { label: string; icon: IconName }> = {
  [DeliveryStatusEnum.PENDING]: {
    label: 'Order pending. Waiting for approval',
    icon: 'Timer',
  },
  [DeliveryStatusEnum.PROCESSING]: {
    label: 'Prepare the item for pickup by the courier',
    icon: 'TruckTime',
  },
  [DeliveryStatusEnum.DELIVERING]: {
    label: 'The order is heading to your address',
    icon: 'TruckFast',
  },
  [DeliveryStatusEnum.COMPLETED]: {
    label: 'The order is arrived to your address',
    icon: 'TruckTick',
  },
  [DeliveryStatusEnum.CANCELED]: {
    label: 'The order has canceled',
    icon: 'CloseCircle',
  },
};

const TransactionDetailPage = () => {
  const [deliveryStatus, setDeliveryStatus] = useState<DeliveryStatusType>(DeliveryStatusEnum.DELIVERING);
  const [showModalCompleted, setShowModalCompleted] = useState(false);
  const [showModalReview, setModalReview] = useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [hasReview, setHasReview] = useState(false);

  const activeStep = steps.findIndex((step) => step.value === deliveryStatus) || 0;

  const toggleModalCompleted = () => setShowModalCompleted((prevState) => !prevState);
  const toggleModalReview = () => setModalReview((prevState) => !prevState);
  const handleCompleteOrder = () => {
    toggleModalCompleted();
    toggleModalReview();
    setIsOrderCompleted(true);
    setDeliveryStatus(DeliveryStatusEnum.COMPLETED);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TestimonySchema>({
    resolver: zodResolver(testimonySchema),
    defaultValues: {
      rating: 5,
      testimony: '',
    },
  });

  const onSubmit = (data: TestimonySchema) => {
    console.log('Form submitted:', data);
    setHasReview(true);
  };

  return (
    <Container className='space-y-5'>
      <Row className='match-height gap-y-5'>
        <Col lg={6} sm={12}>
          <Alert variant={alertColors[deliveryStatus]} className='mb-5'>
            <DynamicIcon
              name={alertMessages[deliveryStatus].icon}
              variant='Bold'
              size={36}
              className='me-2 text-white'
            />
            <p className='font-bold text-sm lg:text-base text-white'>{alertMessages[deliveryStatus].label}</p>
          </Alert>
          <Card>
            <CardHeader>
              <CardTitle tag='h2'>Order Reviews</CardTitle>
            </CardHeader>
            <CardBody>
              <ListHeader
                icon='User'
                imageUrl='https://ik.imagekit.io/dianerdiana/bluee-marketplace/logo/store-thumbnail-1.png'
                imageAlt='Store Logo'
                title='Bimore Gadget Universe'
                label='Mamat Gadget'
              />

              <ListMenu className='mt-5'>
                <ListItem icon='ShoppingCart' value='3' label='Total Products' />
                <ListItem icon='Box' value='25' label='Total Quantity' />
                <ListItem icon='Calendar' value='4 April 2025' label='Date Transaction' />
              </ListMenu>
            </CardBody>
          </Card>
        </Col>

        <Col lg={6} sm={12}>
          <Card>
            <CardHeader>
              <CardTitle tag='h2'>Order Reviews</CardTitle>
            </CardHeader>
            <CardBody>
              <ListHeader
                icon='Call'
                imageUrl='https://ik.imagekit.io/dianerdiana/bluee-marketplace/logo/store-thumbnail-1.png'
                imageAlt='Store Logo'
                title='Bimore W'
                label='081234567890'
                titleSize='lg'
                labelSize='base'
              />

              <ListMenu className='mt-5'>
                <ListItem icon='Sms' value='me@dianerdiana.com' label='Email Address' />
                <ListItem icon='Building' value='Majalengka' label='City Location' />
                <ListItem icon='Routing' value='Jl Raya Sukaraja' label='Street Address' />
                <ListItem icon='Keyboard' value='45454' label='Post Code' />
              </ListMenu>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='gap-y-5'>
        <Col lg={6} sm={12}>
          <Card>
            <CardHeader>
              <CardTitle tag='h2' className='w-full mb-2'>
                Product Details
              </CardTitle>

              <div className='flex items-center text-secondary font-semibold'>
                <DynamicIcon name='ShoppingCart' className='me-1.5' />
                <span>4 Total Products</span>
              </div>
            </CardHeader>
            <CardBody>
              <Card className='lg:p-4 p-2 rounded-2xl border border-back'>
                <Row className='items-center flex-nowrap'>
                  <Col className='w-fit grow-0'>
                    <div className='overflow-hidden w-20 h-20 flex items-center justify-center rounded-xl bg-back'>
                      <img
                        src='https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-10.png'
                        alt='Product Image'
                        className='object-cover w-full h-full'
                      />
                    </div>
                  </Col>

                  <Col lg={5}>
                    <p className='font-bold text-lg line-clamp-1'>Iphone 15 Pro Max </p>
                    <div className='text-secondary flex items-center font-semibold'>
                      <DynamicIcon name='Bag' className='me-1.5' />
                      <span>Electronics</span>
                    </div>
                  </Col>

                  <Col lg={4} className='ms-auto'>
                    <p className='font-bold text-end text-primary'>{formatCurrency(18120500)}</p>
                    <p className='font-semibold text-end text-secondary'>(6x)</p>
                  </Col>
                </Row>

                <hr className='border border-back w-full my-5' />

                <Row className='justify-between'>
                  <Col>
                    <div className='flex items-center shrink-0 text-secondary'>
                      <DynamicIcon name='ShoppingCart' className='me-1.5' />
                      <span className='font-semibold '>Subtotal</span>
                    </div>
                  </Col>

                  <Col>
                    <p className='text-end font-bold text-lg text-primary'>{formatCurrency(108723000)}</p>
                  </Col>
                </Row>
              </Card>
            </CardBody>
          </Card>
        </Col>

        <Col lg={6} sm={12} className='space-y-5'>
          <Card>
            <CardHeader>
              <CardTitle tag='h2'>Transaction Details</CardTitle>
            </CardHeader>
            <CardBody>
              <ListMenu className='p-0 border-none space-y-3'>
                <ListItemHorizontal icon='Receipt2' label='Subtotal' value={formatCurrency(202720500)} />
                <ListItemHorizontal icon='ShoppingCart' label='Service Fee' value={formatCurrency(5000)} />
                <ListItemHorizontal icon='Truck' label='Delivery Fee' value={formatCurrency(25000)} />
                <ListItemHorizontal icon='NoteText' label='PPN Fee' value={formatCurrency(40000)} />
              </ListMenu>

              <hr className='border border-back w-full my-4' />

              <Row className='items-center justify-between'>
                <Col>
                  <div className='flex items-center text-secondary'>
                    <DynamicIcon name='Moneys' className='me-1.5' />
                    <span className='font-medium'>Grand Total</span>
                  </div>
                </Col>
                <Col>
                  <p className='font-bold text-lg text-end text-primary'>{formatCurrency(202772500)}</p>
                </Col>
              </Row>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle tag='h2'>Order Status</CardTitle>
            </CardHeader>
            <CardBody>
              <Row className='m-0'>
                <Col sm={12} className='p-0'>
                  <ProgressSteps steps={steps} activeStep={activeStep} />
                </Col>
                <Col sm={12} className='p-0'>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center text-secondary'>
                      <DynamicIcon name='TruckFast' className='me-1.5' />
                      <span>Delivery Status</span>
                    </div>
                    <Badge variant={badgeColors[deliveryStatus]} className='rounded-full capitalize py-1 px-3'>
                      <span className='capitalize text-sm'>{deliveryStatus.toLowerCase()}</span>
                    </Badge>
                  </div>

                  {[DeliveryStatusEnum.DELIVERING.toLowerCase(), DeliveryStatusEnum.COMPLETED.toLowerCase()].includes(
                    deliveryStatus.toLowerCase(),
                  ) && (
                    <div className='flex flex-wrap justify-between items-center mt-5'>
                      <div className='flex items-center text-secondary'>
                        <DynamicIcon name='Routing' className='me-1.5' />
                        <span>Tracking Number</span>
                      </div>
                      <div className='flex justify-end'>
                        <span className='font-semibold'>{2500050102015}</span>
                      </div>

                      <hr className='w-full border border-back my-5' />

                      <div className='w-full'>
                        <Button
                          variant='primary'
                          className='w-full rounded-full'
                          onClick={isOrderCompleted ? toggleModalReview : toggleModalCompleted}
                          disabled={hasReview}
                        >
                          {isOrderCompleted ? 'Write a Review' : 'Mark As Completed'}
                        </Button>
                      </div>
                    </div>
                  )}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Modal isOpen={showModalCompleted} onClose={toggleModalCompleted}>
        <ModalHeader onClose={toggleModalCompleted}>
          <ModalTitle>Order Confirmation</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className='flex flex-col items-center py-8 mb-3'>
            <DynamicIcon name='BoxTick' size={42} variant='Bulk' className='text-primary mb-3' />
            <p className='text-center text-dark font-medium'>
              Are you sure you want to finish this order? Please ensure you’ve received the item as ordered
            </p>
          </div>
          <div className='space-y-3'>
            <Button variant='primary' className='w-full rounded-xl' onClick={handleCompleteOrder}>
              Yes, Finish the order
            </Button>
            <Button variant='outline-secondary' className='w-full rounded-xl' onClick={toggleModalCompleted}>
              Cancel
            </Button>
          </div>
        </ModalBody>
      </Modal>

      <Modal isOpen={showModalReview} onClose={toggleModalReview}>
        <ModalHeader onClose={toggleModalReview}>
          <ModalTitle>Leaving Testimony?</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify-center py-8'>
              <Controller
                name='rating'
                control={control}
                render={({ field }) => {
                  return <InputRating size={32} {...field} />;
                }}
              />
            </div>
            <div className='mb-3'>
              <Label>Share your Exprerience</Label>
              <Controller
                name='testimony'
                control={control}
                render={({ field }) => {
                  return (
                    <InputIconTextarea
                      isInvalid={errors.testimony && true}
                      icon='MessageText'
                      placeholder='Enter your feedback here'
                      rows={4}
                      {...field}
                    />
                  );
                }}
              />

              {errors.testimony && <InputMessage>{errors.testimony?.message}</InputMessage>}
            </div>
            <div className='space-y-3'>
              <Button type='submit' variant='primary' className='w-full rounded-xl'>
                Submit & Complete
              </Button>
              <Button variant='outline-secondary' className='w-full rounded-xl' onClick={toggleModalReview}>
                No, Thanks
              </Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default TransactionDetailPage;
