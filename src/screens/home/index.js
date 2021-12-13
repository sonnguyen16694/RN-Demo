import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  Image,
  View,
  Button,
  Alert,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons';
import Typography from '../../components/Typography';
import Card from './../../components/Card/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#F2F2F2',
  },
  item_padding: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item: {
    maxHeight: 150,
    minWidth: 300,
    maxWidth: 300,
    flex: 1,
    flexDirection: 'row',
  },
  item_challenge: {
    minWidth: 250,
    maxWidth: 250,
  },
  title: {
    fontSize: 18,
  },
});
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Say no to sugar',
    point: 50,
    deadLine: 6,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '5km challenge',
    point: 50,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '100,000 steps challenge',
    point: 50,
  },
];

const ASSESSMENTS_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Advanced Health Screening',
    point: 1000,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Assessment your partners',
    point: 300,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Survey your items',
    point: 3300,
  },
];

const AssessmentItem = ({title, point}) => (
  <Card style={[styles.item_padding, styles.item]}>
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{
          resizeMode: 'center',
          width: 80,
          height: 80,
        }}
        source={require('../../assets/assessment_1.png')}
      />
    </View>
    <View style={{flex: 6, paddingHorizontal: 5}}>
      <Typography bold style={styles.title}>
        {title}
      </Typography>
      <Typography style={{color: '#9EA3A7', marginTop: 10}}>
        Earn up to{' '}
      </Typography>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Typography style={{color: '#427486', fontWeight: 'bold'}}>
          {point}{' '}
          <Typography style={{fontWeight: 'normal', color: '#9EA3A7'}}>
            pts{' '}
          </Typography>
        </Typography>
        <FontAwesomeIcon icon={faArrowAltCircleRight} color="#9E537C" />
      </View>
    </View>
  </Card>
);
const Item = ({title, point, deadLine}) => (
  <Card style={[styles.item_padding, styles.item_challenge]}>
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{
          resizeMode: 'center',
          width: 100,
          height: 100,
        }}
        source={require('../../assets/assessment_1.png')}
      />
    </View>
    <View style={{flex: 6, paddingHorizontal: 5}}>
      <Typography bold style={styles.title}>
        {title}
      </Typography>
      {deadLine && (
        <Typography style={{color: '#9EA3A7', marginTop: 10}}>
          {deadLine} days left
        </Typography>
      )}
    </View>
    <View style={{flex: 1, paddingHorizontal: 5}}>
      <Typography style={{color: '#9EA3A7', marginTop: 10}}>
        Earn up to{' '}
      </Typography>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Typography style={{color: '#427486', fontWeight: 'bold'}}>
          {point}{' '}
          <Typography style={{fontWeight: 'normal', color: '#9EA3A7'}}>
            pts{' '}
          </Typography>
        </Typography>
        <FontAwesomeIcon icon={faArrowAltCircleRight} color="#9E537C" />
      </View>
    </View>
  </Card>
);
const Home: () => Node = () => {
  const renderItem = ({item}) => (
    <Item title={item.title} point={item.point} deadLine={item.deadLine} />
  );
  const renderAssessmentItem = ({item}) => (
    <AssessmentItem title={item.title} point={item.point} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Typography
          bold
          style={{marginVertical: 8, marginHorizontal: 16, fontSize: 26}}>
          Assessments
        </Typography>
        <FlatList
          data={ASSESSMENTS_DATA}
          renderItem={renderAssessmentItem}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
      <View style={{flex: 2}}>
        <Typography
          bold
          style={{marginVertical: 8, marginHorizontal: 16, fontSize: 26}}>
          Challenges
        </Typography>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
