// Thirdparty
import ReactPaginate from 'react-paginate';

// Custom Components
import { Badge } from '@/components/Badge';
import { Button, ButtonLink } from '@/components/Button';
import { Card } from '@/components/Card';
import { Col } from '@/components/Col';
import { Container } from '@/components/Container';
import { DynamicIcon } from '@/components/DynamicIcon';
import { BaseInput, IconWrapper, InputWrapper, SelectInput } from '@/components/Input';
import { Row } from '@/components/Row';
// Types
import { type DeliveryStatusType, DeliveryStatusEnum } from '@/types/deliveryStatus';

// Utils
import type { badgevariants } from '@/utils/constants/badgeVariants';
import { formatCurrency, formatThousandNumber } from '@/utils/utils';

const transactions = [
  {
    id: '1',
    storeName: 'Ichsan Electronics',
    storeLogoUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/logo/logo-store.png',
    transactionDate: '21 Mei 2025',
    totalProduct: 240,
    totalQuantity: 1650,
    grandTotal: 3200650,
    transactionDelivery: {
      transactionId: '1',
      status: DeliveryStatusEnum.DELIVERING,
      deliveryDate: '24 Mei 2025',
    },
  },
  {
    id: '2',
    storeName: 'Ichsan Electronics',
    storeLogoUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/logo/logo-store.png',
    transactionDate: '21 Mei 2025',
    totalProduct: 240,
    totalQuantity: 1650,
    grandTotal: 3200650,
    transactionDelivery: {
      transactionId: '2',
      status: DeliveryStatusEnum.COMPLETED,
      deliveryDate: '24 Mei 2025',
    },
  },
  {
    id: '3',
    storeName: 'Ichsan Electronics',
    storeLogoUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/logo/logo-store.png',
    transactionDate: '21 Mei 2025',
    totalProduct: 240,
    totalQuantity: 1650,
    grandTotal: 3200650,
    transactionDelivery: {
      transactionId: '3',
      status: DeliveryStatusEnum.PENDING,
      deliveryDate: '24 Mei 2025',
    },
  },
  {
    id: '4',
    storeName: 'Ichsan Electronics',
    storeLogoUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/logo/logo-store.png',
    transactionDate: '21 Mei 2025',
    totalProduct: 240,
    totalQuantity: 1650,
    grandTotal: 3200650,
    transactionDelivery: {
      transactionId: '4',
      status: DeliveryStatusEnum.PROCESSING,
      deliveryDate: '24 Mei 2025',
    },
  },
  {
    id: '5',
    storeName: 'Ichsan Electronics',
    storeLogoUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/logo/logo-store.png',
    transactionDate: '21 Mei 2025',
    totalProduct: 240,
    totalQuantity: 1650,
    grandTotal: 3200650,
    transactionDelivery: {
      transactionId: '4',
      status: DeliveryStatusEnum.CANCELED,
      deliveryDate: '24 Mei 2025',
    },
  },
];

const badgeColors: Record<DeliveryStatusType, keyof typeof badgevariants> = {
  [DeliveryStatusEnum.PROCESSING]: 'light-primary',
  [DeliveryStatusEnum.DELIVERING]: 'light-warning',
  [DeliveryStatusEnum.PENDING]: 'yellow',
  [DeliveryStatusEnum.COMPLETED]: 'light-success',
  [DeliveryStatusEnum.CANCELED]: 'light-danger',
};

const TransactionListPage = () => {
  return (
    <Container>
      <Card className='p-5'>
        <h2 className='text-xl font-bold mb-2'>All Transactions</h2>
        <div className='flex shrink-0 items-center mb-6'>
          <DynamicIcon name='Stickynote' className='me-1.5 text-secondary' />
          <p className='font-semibold text-secondary'>{transactions.length} Total Transactions</p>
        </div>

        {transactions.length ? (
          <>
            <Row className='justify-between items-center mb-6 gap-y-2 lg:gap-0'>
              <Col lg={5} sm={12}>
                <InputWrapper>
                  <IconWrapper>
                    <DynamicIcon name='ReceiptSearch' className='text-secondary' />
                  </IconWrapper>
                  <BaseInput
                    placeholder='Search transaction'
                    className='placeholder:text-secondary placeholder:font-medium'
                  />
                </InputWrapper>
              </Col>
              <Col lg={3} sm={12}>
                <div className='flex items-center justify-end'>
                  <span className='text-secondary me-2'>Show</span>
                  <SelectInput defaultValue={5} className='text-secondary'>
                    <option value='5'>5 Values</option>
                    <option value='10'>10 Values</option>
                    <option value='25'>25 Values</option>
                    <option value='50'>50 Values</option>
                    <option value='100'>100 Values</option>
                  </SelectInput>
                </div>
              </Col>
            </Row>

            {transactions.map((transaction) => (
              <Card key={transaction.id} className='border border-back p-2 lg:p-4 mb-5'>
                <Row className='items-center gap-y-2 lg:gap-0'>
                  <Col lg={6} sm={12}>
                    <div className='flex items-center shrink-0 text-secondary'>
                      <DynamicIcon name='Calendar' className='me-1.5' />
                      <span>{transaction.transactionDelivery.deliveryDate}</span>
                    </div>
                  </Col>
                  <Col lg={6} sm={12}>
                    <div className='flex lg:justify-end'>
                      <Badge
                        variant={badgeColors[transaction.transactionDelivery.status]}
                        className='rounded-xl text-sm'
                      >
                        {transaction.transactionDelivery.status}
                      </Badge>
                    </div>
                  </Col>
                </Row>
                <hr className='text-back my-5' />
                <Row className='items-center gap-y-3 lg:gap-0'>
                  <Col lg={6} sm={12} className='flex items-center'>
                    <div className='w-14 h-14 lg:w-20 lg:h-20 rounded-2xl overflow-hidden me-3.5'>
                      <img src={transaction.storeLogoUrl} alt='Store-Logo' className='w-full h-full object-cover' />
                    </div>
                    <div>
                      <p className='font-bold text-lg'>{transaction.storeName}</p>
                      <div className='flex items-center'>
                        <DynamicIcon name='Calendar2' size={20} className='text-secondary me-1' />
                        <p className='font-semibold text-secondary'>{transaction.transactionDate}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} sm={6}>
                    <Row className='mx-0 items-center'>
                      <Col className='grow-0 w-fit px-0'>
                        <Badge variant='light-secondary' className='p-3 rounded-full'>
                          <DynamicIcon name='ShoppingCart' size={24} />
                        </Badge>
                      </Col>
                      <Col className='ps-2'>
                        <p className='font-bold text-lg'>{formatThousandNumber(transaction.totalProduct)}</p>
                        <p className='font-medium text-secondary'>Total Products</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={3} sm={6}>
                    <Row className='mx-0 items-center'>
                      <Col className='grow-0 w-fit px-0'>
                        <Badge variant='light-secondary' className='p-3 rounded-full'>
                          <DynamicIcon name='Box' size={24} />
                        </Badge>
                      </Col>
                      <Col className='ps-2'>
                        <p className='font-bold text-lg'>{formatThousandNumber(transaction.totalQuantity)}</p>
                        <p className='font-medium text-secondary'>Total Quantity</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <hr className='text-back my-5' />

                <Row className='items-center justify-between gap-y-3'>
                  <Col>
                    <p className='text-primary font-bold text-xl'>{formatCurrency(transaction.grandTotal)}</p>
                    <div className='flex items-center'>
                      <DynamicIcon name='Moneys' size={20} className='text-secondary me-1.5' />
                      <p className='text-secondary font-medium'>Grand Total</p>
                    </div>
                  </Col>
                  <Col sm={12} lg={3} className='flex justify-end items-center gap-3.5'>
                    <Button variant='dark' className='flex items-center px-4 py-3 rounded-2xl'>
                      <span className='font-semibold text-base me-1.5 lg:inline hidden'>Export</span>
                      <DynamicIcon name='ReceiveSquare' size={24} />
                    </Button>
                    <ButtonLink
                      href={`/transactions/${transaction.id}/details`}
                      variant='primary'
                      className='flex items-center px-4 py-3 rounded-2xl'
                    >
                      <DynamicIcon name='Eye' size={24} />
                      <span className='font-semibold text-base lg:inline hidden ms-1.5'>Details</span>
                    </ButtonLink>
                  </Col>
                </Row>
              </Card>
            ))}

            <ReactPaginate
              previousLabel={<DynamicIcon name='ArrowLeft2' size={16} />}
              nextLabel={<DynamicIcon name='ArrowRight2' size={16} />}
              pageCount={10}
              activeClassName='active'
              forcePage={0}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              onPageChange={(page) => console.log(page)}
              pageClassName={'page-item'}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next'}
              previousClassName={'page-item prev'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              containerClassName={'pagination react-paginate my-2 gap-2'}
            />
          </>
        ) : (
          <div className='py-28'>
            <div className='flex justify-center mb-5'>
              <DynamicIcon name='NoteRemove' size={52} className='w-full text-secondary' />
            </div>
            <p className='text-secondary text-center font-semibold w-full'>Oops, you don't have any data yet</p>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default TransactionListPage;
