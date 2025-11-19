"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Save, Globe, Bell, Shield, Database, Mail } from "lucide-react";
import { TIMEZONES, LANGUAGES } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export default function SettingsPage() {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "TalkTopic",
    siteDescription: "A platform for meaningful discussions",
    siteUrl: "https://talktopic.com",
    adminEmail: "admin@talktopic.com",
    timezone: "America/New_York",
    language: "en",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    commentNotifications: true,
    newUserNotifications: true,
    weeklyReport: true,
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: "30",
    maxLoginAttempts: "5",
    ipWhitelist: "",
  });

  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your platform settings and configurations
        </p>
      </div>

      {/* General Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <CardTitle>General Settings</CardTitle>
          </div>
          <CardDescription>Basic information about your platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="siteName">Site Name</Label>
              <Input
                id="siteName"
                value={generalSettings.siteName}
                onChange={(e) =>
                  setGeneralSettings({ ...generalSettings, siteName: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="siteUrl">Site URL</Label>
              <Input
                id="siteUrl"
                type="url"
                value={generalSettings.siteUrl}
                onChange={(e) =>
                  setGeneralSettings({ ...generalSettings, siteUrl: e.target.value })
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="siteDescription">Site Description</Label>
            <Textarea
              id="siteDescription"
              value={generalSettings.siteDescription}
              onChange={(e) =>
                setGeneralSettings({ ...generalSettings, siteDescription: e.target.value })
              }
              rows={3}
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="adminEmail">Admin Email</Label>
              <Input
                id="adminEmail"
                type="email"
                value={generalSettings.adminEmail}
                onChange={(e) =>
                  setGeneralSettings({ ...generalSettings, adminEmail: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <select
                id="timezone"
                value={generalSettings.timezone}
                onChange={(e) =>
                  setGeneralSettings({ ...generalSettings, timezone: e.target.value })
                }
              >
                {TIMEZONES.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <select
              id="language"
              value={generalSettings.language}
              onChange={(e) =>
                setGeneralSettings({ ...generalSettings, language: e.target.value })
              }
              className="max-w-xs"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <CardTitle>Notification Settings</CardTitle>
          </div>
          <CardDescription>Configure how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive notifications via email</p>
              </div>
              <Button
                variant={notificationSettings.emailNotifications ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setNotificationSettings({
                    ...notificationSettings,
                    emailNotifications: !notificationSettings.emailNotifications,
                  })
                }
              >
                {notificationSettings.emailNotifications ? "Enabled" : "Disabled"}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Receive push notifications</p>
              </div>
              <Button
                variant={notificationSettings.pushNotifications ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setNotificationSettings({
                    ...notificationSettings,
                    pushNotifications: !notificationSettings.pushNotifications,
                  })
                }
              >
                {notificationSettings.pushNotifications ? "Enabled" : "Disabled"}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Comment Notifications</p>
                <p className="text-sm text-muted-foreground">Get notified of new comments</p>
              </div>
              <Button
                variant={notificationSettings.commentNotifications ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setNotificationSettings({
                    ...notificationSettings,
                    commentNotifications: !notificationSettings.commentNotifications,
                  })
                }
              >
                {notificationSettings.commentNotifications ? "Enabled" : "Disabled"}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">New User Notifications</p>
                <p className="text-sm text-muted-foreground">Get notified of new registrations</p>
              </div>
              <Button
                variant={notificationSettings.newUserNotifications ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setNotificationSettings({
                    ...notificationSettings,
                    newUserNotifications: !notificationSettings.newUserNotifications,
                  })
                }
              >
                {notificationSettings.newUserNotifications ? "Enabled" : "Disabled"}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Weekly Reports</p>
                <p className="text-sm text-muted-foreground">Receive weekly analytics reports</p>
              </div>
              <Button
                variant={notificationSettings.weeklyReport ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setNotificationSettings({
                    ...notificationSettings,
                    weeklyReport: !notificationSettings.weeklyReport,
                  })
                }
              >
                {notificationSettings.weeklyReport ? "Enabled" : "Disabled"}
              </Button>
            </div>
          </div>
          <div className="flex justify-end">
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <CardTitle>Security Settings</CardTitle>
          </div>
          <CardDescription>Manage security and access controls</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
            </div>
            <Button
              variant={securitySettings.twoFactorAuth ? "default" : "outline"}
              size="sm"
              onClick={() =>
                setSecuritySettings({
                  ...securitySettings,
                  twoFactorAuth: !securitySettings.twoFactorAuth,
                })
              }
            >
              {securitySettings.twoFactorAuth ? "Enabled" : "Disabled"}
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
              <Input
                id="sessionTimeout"
                type="number"
                value={securitySettings.sessionTimeout}
                onChange={(e) =>
                  setSecuritySettings({ ...securitySettings, sessionTimeout: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
              <Input
                id="maxLoginAttempts"
                type="number"
                value={securitySettings.maxLoginAttempts}
                onChange={(e) =>
                  setSecuritySettings({ ...securitySettings, maxLoginAttempts: e.target.value })
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="ipWhitelist">IP Whitelist (comma-separated)</Label>
            <Textarea
              id="ipWhitelist"
              value={securitySettings.ipWhitelist}
              onChange={(e) =>
                setSecuritySettings({ ...securitySettings, ipWhitelist: e.target.value })
              }
              placeholder="192.168.1.1, 10.0.0.1"
              rows={3}
            />
          </div>
          <div className="flex justify-end">
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Maintenance Mode */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            <CardTitle>Maintenance Mode</CardTitle>
          </div>
          <CardDescription>Temporarily disable public access to your platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Status</p>
              <p className="text-sm text-muted-foreground mt-1">
                {maintenanceMode
                  ? "Site is currently in maintenance mode"
                  : "Site is running normally"}
              </p>
              {maintenanceMode && (
                <Badge variant="warning" className="mt-2">
                  Maintenance Active
                </Badge>
              )}
            </div>
            <Button
              variant={maintenanceMode ? "destructive" : "default"}
              onClick={() => setMaintenanceMode(!maintenanceMode)}
            >
              {maintenanceMode ? "Disable Maintenance" : "Enable Maintenance"}
            </Button>
          </div>
          {maintenanceMode && (
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <p className="text-sm text-amber-600 dark:text-amber-500">
                ⚠️ Your site is currently in maintenance mode. Only administrators can access the
                platform.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Email Configuration */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            <CardTitle>Email Configuration</CardTitle>
          </div>
          <CardDescription>Configure your email service provider</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="smtpHost">SMTP Host</Label>
              <Input id="smtpHost" placeholder="smtp.example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtpPort">SMTP Port</Label>
              <Input id="smtpPort" type="number" placeholder="587" />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="smtpUser">SMTP Username</Label>
              <Input id="smtpUser" placeholder="user@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtpPass">SMTP Password</Label>
              <Input id="smtpPass" type="password" placeholder="••••••••" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="fromEmail">From Email Address</Label>
            <Input id="fromEmail" type="email" placeholder="noreply@talktopic.com" />
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="outline">Test Connection</Button>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Configuration
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}