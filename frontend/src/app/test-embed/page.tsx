'use client';

import { useState } from 'react';
import { SigmaEmbed } from '@/components/sigma-embed';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

export default function TestEmbedPage() {
  const [selectedWorkbook, setSelectedWorkbook] = useState('workbook-4osogXvjSNtZFo3DW2XYGs');
  const [userEmail, setUserEmail] = useState('test@example.com');
  const [accountType, setAccountType] = useState('viewer');
  const [teams, setTeams] = useState('test-team');
  const [theme, setTheme] = useState('Light');
  const [menuPosition, setMenuPosition] = useState('bottom');
  const [hideBookmarks, setHideBookmarks] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);
  const [responsiveHeight, setResponsiveHeight] = useState(true);
  const [sessionLength, setSessionLength] = useState(3600);

  // Available workbooks for testing
  const availableWorkbooks = [
    {
      id: 'workbook-4osogXvjSNtZFo3DW2XYGs',
      name: 'Test Workbook 1',
      description: 'First test workbook for embedding'
    },
    {
      id: 'workbook-dOnwolvEKHWFDkc34cBI4',
      name: 'Test Workbook 2', 
      description: 'Second test workbook for embedding'
    }
  ];

  const workbookPath = `workbook/${selectedWorkbook}`;

  const embedOptions = {
    hideBookmarks,
    hideMenu,
    responsiveHeight,
    theme,
    menuPosition: menuPosition as 'top' | 'bottom' | 'none',
  };

  // Determine if this is an internal user (existing Sigma account)
  const isInternalUser = userEmail.endsWith('@sigmacomputing.com');
  
  const jwtOptions = {
    sessionLength,
    isEmbedUser: !isInternalUser, // Internal users should not be treated as embed users
    ...(isInternalUser ? {} : {
      accountType,
      teams: teams.split(',').map(t => t.trim()).filter(Boolean),
    }),
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-shadow">Sigma Embed Test</h1>
          <p className="mt-2 text-lg text-shadow-lite">
            Test the Sigma embedding functionality with different configurations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Configuration</CardTitle>
                <CardDescription>
                  Configure the embed parameters and test different settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="selectedWorkbook">Select Workbook</Label>
                  <Select value={selectedWorkbook} onValueChange={setSelectedWorkbook}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a workbook to test" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableWorkbooks.map((workbook) => (
                        <SelectItem key={workbook.id} value={workbook.id}>
                          <div className="flex flex-col">
                            <span className="font-medium">{workbook.name}</span>
                            <span className="text-sm text-gray-500">{workbook.description}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workbookPath">Workbook Path (Generated)</Label>
                  <Input
                    id="workbookPath"
                    value={workbookPath}
                    readOnly
                    className="bg-gray-50"
                    placeholder="workbook/name/id"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="userEmail">User Email</Label>
                  <Input
                    id="userEmail"
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="user@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accountType">Account Type</Label>
                  <Select value={accountType} onValueChange={setAccountType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="viewer">Viewer</SelectItem>
                      <SelectItem value="explorer">Explorer</SelectItem>
                      <SelectItem value="creator">Creator</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teams">Teams (comma-separated)</Label>
                  <Input
                    id="teams"
                    value={teams}
                    onChange={(e) => setTeams(e.target.value)}
                    placeholder="team1, team2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sessionLength">Session Length (seconds)</Label>
                  <Input
                    id="sessionLength"
                    type="number"
                    value={sessionLength}
                    onChange={(e) => setSessionLength(Number(e.target.value))}
                    min="300"
                    max="2592000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Light">Light</SelectItem>
                      <SelectItem value="Dark">Dark</SelectItem>
                      <SelectItem value="Surface">Surface</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="menuPosition">Menu Position</Label>
                  <Select value={menuPosition} onValueChange={setMenuPosition}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="top">Top</SelectItem>
                      <SelectItem value="bottom">Bottom</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="hideBookmarks"
                      checked={hideBookmarks}
                      onCheckedChange={setHideBookmarks}
                    />
                    <Label htmlFor="hideBookmarks">Hide Bookmarks</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="hideMenu"
                      checked={hideMenu}
                      onCheckedChange={setHideMenu}
                    />
                    <Label htmlFor="hideMenu">Hide Menu</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="responsiveHeight"
                      checked={responsiveHeight}
                      onCheckedChange={setResponsiveHeight}
                    />
                    <Label htmlFor="responsiveHeight">Responsive Height</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Embed Display */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Embed Preview</CardTitle>
                <CardDescription>
                  Live preview of the Sigma embed with your configuration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SigmaEmbed
                  workbookPath={workbookPath}
                  userEmail={userEmail}
                  title={`Test Embed: ${workbookPath}`}
                  width="100%"
                  height="600px"
                  options={embedOptions}
                  jwtOptions={jwtOptions}
                  className="min-h-[600px]"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Configuration Summary */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Configuration Summary</CardTitle>
              <CardDescription>
                Current configuration being used for the embed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-shadow mb-2">Basic Settings</h4>
                  <ul className="text-sm text-shadow-lite space-y-1">
                    <li><strong>Selected Workbook:</strong> {availableWorkbooks.find(w => w.id === selectedWorkbook)?.name || selectedWorkbook}</li>
                    <li><strong>Workbook Path:</strong> {workbookPath}</li>
                    <li><strong>User Email:</strong> {userEmail}</li>
                    <li><strong>Account Type:</strong> {accountType}</li>
                    <li><strong>Teams:</strong> {teams}</li>
                    <li><strong>Session Length:</strong> {sessionLength}s</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-shadow mb-2">Display Settings</h4>
                  <ul className="text-sm text-shadow-lite space-y-1">
                    <li><strong>Theme:</strong> {theme}</li>
                    <li><strong>Menu Position:</strong> {menuPosition}</li>
                    <li><strong>Hide Bookmarks:</strong> {hideBookmarks ? 'Yes' : 'No'}</li>
                    <li><strong>Hide Menu:</strong> {hideMenu ? 'Yes' : 'No'}</li>
                    <li><strong>Responsive Height:</strong> {responsiveHeight ? 'Yes' : 'No'}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
