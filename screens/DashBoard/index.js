import * as React from 'react';
import { useEffect } from 'react';

import { Button } from 'react-native';
import BackgroundGradient from '../../components/BackgroundGradient';
import {  IgnoreStatusBar } from '../../components/IgnoreStatusBar';

import {
  Header,
  ProfilePhoto,
  UserInfo,
  Username,
  AccountNumber,
  HelpButton,
  SettingsButton,
  BalanceStatus,
  BalanceContainer,
  CurrentBalanceText,
  Balance,
  ButtonsMenu,
  DashboardButtonsContainer,
  ProfileButton,
  MyProfileText,
} from './styles';

import DashboardButton from '../../components/DashBoardButton';

import {
  Settings,
  HelpCircle,
  Send,
  ArrowDownLeft,
  List,
  Heart,
  User,
} from 'react-native-feather';

import { useLanguage } from '../../context/Language'
import { useUser } from '../../context/User';
import { useAvatar } from '../../context/Avatar'

export default function Dashboard({navigation}) {

  const { languages, lang } = useLanguage();
  const { currentUser } = useUser()
  const { getAvatarPicture, currentAvatar } = useAvatar()

  return (
    <BackgroundGradient>
      <IgnoreStatusBar />
      <Header>
        <ProfilePhoto
          source={getAvatarPicture(currentUser.profile)}
        />
        <UserInfo>
          <Username>{currentUser.firstName}</Username>
          <AccountNumber>{languages[lang].account} {currentUser.accountNumber}</AccountNumber>
        </UserInfo>
        <HelpButton onPress={() => navigation.navigate('Help')}>
          <HelpCircle width={30} height={30} color="#fff" />
        </HelpButton>
        <SettingsButton onPress={() => navigation.navigate('Settings')}>
          <Settings color="#fff" width={30} height={30} />
        </SettingsButton>
      </Header>
      <BalanceStatus>
        <BalanceContainer>
          <CurrentBalanceText>{languages[lang].balance}</CurrentBalanceText>
           <Balance>{currentUser.balance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Balance>
        </BalanceContainer>
      </BalanceStatus>
      <DashboardButtonsContainer>
        <DashboardButton title={languages[lang].transfer} color="#A57B26" onPress={() => navigation.navigate('Transfer')}>
          <Send width={58} height={58} color="#fff" />
        </DashboardButton>
        <DashboardButton title={languages[lang].deposit} color="#0F1317" onPress={() => navigation.navigate('Deposit')}>
          <ArrowDownLeft width={58} height={58} color="#fff" />
        </DashboardButton>
        <DashboardButton title={languages[lang].transactions} color="#121B31" onPress={() => navigation.navigate('Transactions')}>
          <List width={58} height={58} color="#fff" />
        </DashboardButton>
        <DashboardButton title={languages[lang].donate} color="#CB7070" onPress={() => navigation.navigate('Donation')}>
          <Heart width={58} height={58} color="#fff" />
        </DashboardButton>
      </DashboardButtonsContainer>
      <ProfileButton onPress={() => navigation.navigate('Profile')}>
        <User width={30} height={30} color="#fff"/>
        <MyProfileText>{languages[lang].myProfile}</MyProfileText>
      </ProfileButton>
    </BackgroundGradient>
  );
}