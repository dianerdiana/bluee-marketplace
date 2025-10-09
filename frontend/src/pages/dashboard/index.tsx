// Custom Components
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Col } from '@/components/Col';
import { Container } from '@/components/Container';
import { DynamicIcon } from '@/components/DynamicIcon';
import { Row } from '@/components/Row';

// Utils
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
  },
];

const DashboardPage = () => {
  return (
    <Container>
      <Row className='gap-y-5 lg:gap-0 mb-5'>
        <Col lg={6} sm={12}>
          <Card>
            <Badge variant='light-primary' className='p-3 mb-6 rounded-full'>
              <DynamicIcon name='Wallet' variant='Bold' size={24} />
            </Badge>

            <div>
              <p className='mb-1.5 font-bold lg:text-4xl text-2xl'>{formatCurrency(920650320)}</p>
              <p className='font-medium text-lg text-secondary'>Total Expense</p>
            </div>
          </Card>
        </Col>
        <Col lg={6} sm={12}>
          <Card>
            <Badge variant='light-primary' className='p-3 mb-6 rounded-full'>
              <DynamicIcon name='ShoppingCart' variant='Bold' size={24} />
            </Badge>

            <div>
              <p className='mb-1.5 font-bold lg:text-4xl text-2xl'>{formatThousandNumber(16500)}</p>
              <p className='font-medium text-lg text-secondary'>Total Products</p>
            </div>
          </Card>
        </Col>
      </Row>

      <Card>
        <Badge variant='light-primary' className='p-3 mb-6 rounded-full'>
          <DynamicIcon name='Stickynote' variant='Bold' size={24} />
        </Badge>
        <div>
          <p className='mb-1.5 font-bold lg:text-4xl text-2xl'>{formatThousandNumber(165200)}</p>
          <p className='font-medium text-lg text-secondary'>Total Transactions</p>
        </div>
        <hr className='text-back my-6' />
        <p className='font-bold text-xl mb-4'>Latest Transactions</p>

        {transactions.length ? (
          transactions.map((transaction) => (
            <Card key={transaction.id} className='border border-back p-2 lg:p-4'>
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
                  <Button variant='primary' className='flex items-center px-4 py-3 rounded-2xl'>
                    <DynamicIcon name='Eye' size={24} />
                    <span className='font-semibold text-base lg:inline hidden ms-1.5'>Details</span>
                  </Button>
                </Col>
              </Row>
            </Card>
          ))
        ) : (
          <div className='py-8'>
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

export default DashboardPage;
